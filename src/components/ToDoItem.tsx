import React from "react";
import { CloseButton, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteToDo, toggleToDo } from "slices/todos";
import { ToDo } from "types";

export interface ToDoItemProperty {
  todo: ToDo;
}

export const ToDoItem: React.FC<ToDoItemProperty> = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <ListGroup.Item as="li" key={todo.id}>
      <Row>
        <Col onClick={() => dispatch(toggleToDo(todo.id))}>
          {todo.completed && (
            <p className="text-decoration-line-through">{todo.todo}</p>
          )}
          {!todo.completed && <p>{todo.todo}</p>}
        </Col>
        <Col sm={1}>
          <CloseButton onClick={() => dispatch(deleteToDo(todo.id))} />
        </Col>
      </Row>
    </ListGroup.Item>
  );
};
