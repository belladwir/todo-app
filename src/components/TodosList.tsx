import React, { useEffect, useState } from 'react'
import { Todo } from '../models/todo.model'
import Todos from './Todo'

interface ITodosListProps {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export default function TodosList({todos, setTodos}: ITodosListProps) {

    const handleCompleted = (currentTodo: Todo) => {
        const updateTodo:Todo = {
            id: currentTodo.id,
            title: currentTodo.title,
            completed: !currentTodo.completed,
            date: currentTodo.date
        }

        setTodos(todos.map(todo => (todo.id === currentTodo.id ? updateTodo : todo)));
    }

    const handleDeleted = (deletedTodo: Todo) => {
        setTodos(todos.filter(todo => (todo.id !== deletedTodo.id)));
    }

    useEffect(() => {
        renderNotes();
    }, [handleCompleted, handleDeleted]);

    const renderNotes = () =>{
        return todos.map(todo => {
            return <Todos 
                key = {todo.id} 
                todo={todo} 
                handleCompleted={handleCompleted} 
                handleDeleted={handleDeleted} />
        })
    }

  return (
    <>
    <p className='ms-3 mb-0 fw-bold'>TODAY</p>
    <div>{renderNotes()}</div>
    </>
  )
}