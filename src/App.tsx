import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Todo } from './models/todo.model';
import Header from './components/Header';
import TodosList from './components/TodosList';
import { Col, Container, Row } from 'react-bootstrap';
import CreateTodo from './components/CreateTodo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([{
    id: (new Date).toString(),
    title: "Wash shoes!",
    completed: false,
    date: (new Date).toString()
  }]);

  return (
    <>
    <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <CreateTodo todos={todos} setTodos={setTodos} />
            <TodosList todos={todos} setTodos={setTodos}/>
          </Col>
        </Row>
      </Container>

      <style type="text/css">
          {`
            .btn-flat {
              background-color: #368f8b;
              color: white;
            }
            .form-check-input[type=checkbox] {
              border-radius: 100% !important;
              border: solid 1px #368f8b;
            }
            .form-check-input:checked {
              background-color: #368f8b;
              border-color: #368f8b;
          }
        `}
      </style>
    </>
  );
}

export default App;
