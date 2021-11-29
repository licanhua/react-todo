import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToDo, ToDosState } from "types";

export const initialState: ToDosState = {
  todos: [],
};

const toDos = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, { payload }: PayloadAction<string>) => {
      const id =
        state.todos.length === 0
          ? 1
          : state.todos[state.todos.length - 1].id + 1;
      state.todos.push({ id, todo: payload, completed: false });
    },
    deleteToDo: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
    toggleToDo: (state, { payload }: PayloadAction<number>) => {
      state.todos = state.todos.map((item) =>
        item.id === payload ? { ...item, completed: !item.completed } : item
      );
    },
    loadToDos: (state) => initialState,
    loadToDosSuccess: (state, { payload }: PayloadAction<ToDo[]>) => {
      state.todos = payload;
    },
    loadToDosError: (state) => initialState,
    saveToDos: (state) => {},
  },
});

export const {
  addToDo,
  deleteToDo,
  toggleToDo,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDos,
} = toDos.actions;
export default toDos.reducer;
