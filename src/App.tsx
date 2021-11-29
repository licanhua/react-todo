import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ToDoFilter } from "container/ToDoFilter";
import { ToDoAdd } from "container/ToDoAdd";
import { ToDoList } from "container/ToDoList";
import { loadToDos } from "slices/todos";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadToDos());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col lg="2" xl="3" />
        <Col className="bg-info">
          <Container className="m-2">
            <h1 className="text-center">ToDo App</h1>
            <ToDoAdd />
            <ToDoFilter />
            <ToDoList />
          </Container>
        </Col>
        <Col lg="2" xl="3" />
      </Row>
    </Container>
  );
}

export default App;
