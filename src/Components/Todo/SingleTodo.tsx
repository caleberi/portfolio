import React, { useState } from 'react'
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

    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo) // this contains the todo already

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

    const handleEdit = () => {
        if(!edit && !todo.isDone){
            setEdit(!edit);
        }
    }

    const handleFormSubmit = (e: React.FormEvent, id:number) => {
        e.preventDefault()

        setTodos(todos.map(todo => (
            todo.id === id ? { ...todo, todo: editTodo } : todo
        )))

        setEdit(false) // this is to close the input
    }

  return (
    <form className='singleTodo' onSubmit={(e) => handleFormSubmit(e, todo.id)}>
        <div className='singleTodo__list'>

            {/* CONDITIONALLY RENDERING THE INPUT BASED ON THE EDIT STATE */}   
            {
                edit ? (
                    <input 
                        type="text" 
                        value={editTodo}
                        onChange={(e) => setEditTodo(e.target.value)}
                    />
                ) : 
                (
                    <p className={todo.isDone ? 'completed' : ''}>{todo.todo}</p>
                )
            }
            <span onClick={handleEdit}><AiFillEdit /></span>
            <span onClick={() => handleDelete(todo.id)}><AiFillDelete /></span>
            <span onClick={() => handleDone(todo.id)}><MdDone /></span>
        </div>
    </form>
  )
}

export default SingleTodo