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
  return (
    <form className='singleTodo'>
        <div className='singleTodo__list'>
            <p>{todo.todo}</p>
            <span><AiFillEdit /></span>
            <span><AiFillDelete /></span>
            <span><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo