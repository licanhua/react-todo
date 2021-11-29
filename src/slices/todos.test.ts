import { PayloadAction } from "@reduxjs/toolkit";
import reducer, {
  addToDo,
  deleteToDo,
  toggleToDo,
  loadToDos,
  loadToDosError,
  loadToDosSuccess,
  saveToDos,
  initialState,
} from "./todos";

const createToDo = (id: number, todo: string, completed: boolean = false) => {
  return { id, completed, todo };
};

describe("todos slice", () => {
  test("should return initial state on first run", () => {
    const nextState = initialState;
    const action = {} as PayloadAction;
    const result = reducer(undefined, action);

    expect(result).toEqual(nextState);
  });
  describe("addToDo", () => {
    test("should add todo if there are no todos", () => {
      const payload = "todo";
      const nextState = { ...initialState, todos: [createToDo(1, payload)] };
      const result = reducer(initialState, addToDo(payload));

      expect(result).toEqual(nextState);
    });
    test("should add todo with last item id+1", () => {
      const payload = "todo";
      const startState = {
        ...initialState,
        todos: [createToDo(10, "unknown")],
      };
      const nextState = {
        ...initialState,
        todos: [...startState.todos, createToDo(11, payload)],
      };
      const result = reducer(startState, addToDo(payload));

      expect(result).toEqual(nextState);
    });
  });
  describe("deleteToDo", () => {
    test("should delete the Todo item", () => {
      const payload = "todo";
      const startState = {
        ...initialState,
        todos: [createToDo(10, "unknown"), createToDo(11, payload)],
      };
      const nextState = { ...initialState, todos: [createToDo(11, payload)] };
      const result = reducer(startState, deleteToDo(10));

      expect(result).toEqual(nextState);
    });
  });
  describe("toggleToDo", () => {
    test("should complete the Todo item", () => {
      const payload = "todo";
      const startState = {
        ...initialState,
        todos: [createToDo(10, "unknown"), createToDo(11, payload)],
      };
      const nextState = {
        ...initialState,
        todos: [createToDo(10, "unknown", true), createToDo(11, payload)],
      };
      const result = reducer(startState, toggleToDo(10));

      expect(result).toEqual(nextState);
    });
  });
});
