import React from 'react'

interface IProps {
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e: React.FormEvent) => void;
}

const Input: React.FC<IProps> = ({ todo, setTodo, handleAdd }) => {
    // console.log(todo)
  return (
    <form>
        <h2>Input Component</h2>
        <input 
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleAdd}>SUBMIT</button>
    </form>
  )
}

export default Input