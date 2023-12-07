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
        <ListGroup.Item as='li' className='d-flex justify-content-between border-0 ps-0 pe-0 bg-transparent'>
            <div className='d-flex align-center'>
              <FormCheck
                  id={`default-${todo.id}`}
                  style={{borderRadius: '100%'}}
                  onClick={() => handleCompleted(todo)}
              />
                  <span className={todo.completed ? 'text-decoration-line-through text-muted ps-4 pe-4' : 'ps-4 pe-4'}>{todo.title}</span>
            </div>
              {/* <Button size='sm' variant='flat' onClick={() => handleDeleted(todo)}>x</Button> */}
        </ListGroup.Item>
    </ListGroup>
  )
}