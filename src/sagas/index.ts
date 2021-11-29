import { all, call, put, select, takeLatest } from "redux-saga/effects";
import {
  addToDo,
  deleteToDo,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDos,
  toggleToDo,
} from "slices/todos";
import api from "apis";
import { ToDosState } from "types";
import { toDoSelector } from "selectors";

export function* loadToDosSaga(): any {
  try {
    const todos = yield call(api.loadToDos);
    yield put(loadToDosSuccess(todos));
  } catch {
    yield put(loadToDosError());
  }
}

export function* saveToDosSaga(): any {
  const todosState: ToDosState = yield select(toDoSelector);
  yield call(api.saveToDos, todosState.todos);
}

export function* dataChangedSaga() {
  yield put(saveToDos());
}

export function* rootSaga() {
  yield all([
    takeLatest(loadToDos, loadToDosSaga),
    takeLatest(saveToDos, saveToDosSaga),
    takeLatest(deleteToDo, dataChangedSaga),
    takeLatest(addToDo, dataChangedSaga),
    takeLatest(toggleToDo, dataChangedSaga),
  ]);
}
