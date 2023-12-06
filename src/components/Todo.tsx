import React, { useEffect, useState } from 'react'
import { Todo } from '../models/todo.model'
import { Button, FormCheck, ListGroup } from 'react-bootstrap'

interface ITodosProps{
    todo: Todo,
    handleCompleted: (todo: Todo) => void,
    handleDeleted: (todo: Todo) => void
}

export default function Todos({todo, handleCompleted, handleDeleted}: ITodosProps) {

  return (
    <ListGroup as='ol' className='m-3'>
        <ListGroup.Item as='li' style={{display: 'flex'}}>
            <FormCheck
                id={`default-${todo.id}`}
                onClick={() => handleCompleted(todo)}
            />
            <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.title}</span>
            <Button size='sm' variant='dark' onClick={() => handleDeleted(todo)}>delete</Button>
        </ListGroup.Item>
    </ListGroup>
  )
}