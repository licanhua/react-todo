import { ToDoItem } from './ToDoItem';
import { render } from "@testing-library/react";

// https://stackoverflow.com/questions/59018071/mock-usedispatch-in-jest-and-test-the-params-with-using-that-dispatch-action-in

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

import { ToDoItemProperty } from "./ToDoItem";

describe("<ToDoItem />", () => {
  it("renders the ToDoItem component", () => {
    const todoItemProps: ToDoItemProperty = {
      todo: {
        id: 1,
        todo: "this is a test",
        completed: true,
      },
    };

    const component = render(
      <ToDoItem {...todoItemProps} />
    );

    expect(component).toBeTruthy();
  });
});
