import React, { useRef, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Todo } from '../models/todo.model';

interface ICreateTodoProps {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function CreateTodo({todos, setTodos}: ICreateTodoProps) {
  
  const titleRef = useRef<HTMLInputElement| null>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    console.log((titleRef.current as HTMLInputElement).value)

    if(titleRef.current?.value === ""){
      return;
    }

    setTodos([...todos, {
      id: (new Date).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      completed: false,
      date: (new Date).toString()
    }])

    clearForm();
  }

  const clearForm = () =>{
    (titleRef.current as HTMLInputElement).value = "";
  }

  return (
    <>
    <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className='m-3' controlId='formBasicTitle'>
            <Form.Control type='text' placeholder='type' ref={titleRef}/>
            <Button type='submit' variant='dark' size='sm'>+ New</Button>
        </Form.Group>
    </Form>
    </>
  )
}