import React from 'react'
import { Todo } from '../../Models/Todo'
import SingleTodo from './SingleTodo'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}

const TodoList:React.FC<Props> = ({ todos, setTodos }) => {
    // console.log(todos)

    const mappedTodos = todos.map(todo => (
        <div key={todo.id}>
            {/* <li>{todo.todo}</li> */}
            <SingleTodo 
                todo={todo} 
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
            />
        </div>
    ))
  return (
    <div>
        <h2>TodoList Component</h2>

        {mappedTodos}
    </div>
  )
}

export default TodoList