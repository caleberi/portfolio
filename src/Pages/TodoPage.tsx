import React, { useState } from 'react'
// import Input from '../Components/Input'
import Input from '../Components/Todo/Input'
import TodoList from '../Components/Todo/TodoList'
import { Todo } from '../Models/Todo'

const TodoPage: React.FC = () => {
    const [todo, setTodo] = useState<string>("")
    const [todos, setTodos] = useState<Todo[]>([]) // An array of objects => useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()
        if(todo){
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    todo: todo,
                    isDone: false
                }
            ])
            setTodo("")
        }
        else{
            alert("Baba, put something there jhor")
        }

    }

   

  return (
    <div>
        <Input 
            todo={todo} 
            setTodo={setTodo}
            handleAdd={handleAdd}
        />

        <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default TodoPage