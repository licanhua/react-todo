import { render } from "@testing-library/react";
import { ToDoItem, ToDoItemProperty } from "./ToDoItem";
import { Provider } from "react-redux";
import store from "store";

test("Sample test", () => {
  expect(true).toBeTruthy();
});

describe("<ActionButton />", () => {
  it("renders the ActionButton component", () => {
    const todoItemProps: ToDoItemProperty = {
      todo: {
        id: 1,
        todo: "this is a test",
        completed: true,
      },
    };

    const component = render(
      <Provider store={store}>
        <ToDoItem {...todoItemProps} />
      </Provider>
    );

    expect(component).toBeTruthy();
  });
});
