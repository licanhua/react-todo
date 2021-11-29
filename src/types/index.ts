export interface ToDo {
  id: number;
  completed: boolean;
  todo: string;
}

export interface FilterState {
  showOption: "all" | "active" | "completed";
  filter: string;
}

export interface ToDosState {
  todos: ToDo[];
}

export interface RootState {
  filter: FilterState;
  todo: ToDosState;
}
