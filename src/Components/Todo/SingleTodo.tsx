import React from 'react'
import { Todo } from '../../Models/Todo'
import '../../Styles/SingleTodo.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'

interface Props{
    todo: Todo
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const SingleTodo:React.FC<Props> = ({ todo, todos, setTodos }) => {

    const handleDone = (id: number) => {
        setTodos(
            todos.map((todo) => todo.id === id ? 
            {
                ...todo, 
                isDone: !todo.isDone
            }
            :
            todo
            )
        )
    }

    const handleDelete = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
    <form className='singleTodo'>
        <div className='singleTodo__list'>
            <p className={todo.isDone ? 'completed' : ''}>{todo.todo}</p>
            <span><AiFillEdit /></span>
            <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo