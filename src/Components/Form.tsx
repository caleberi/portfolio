import React, { useState } from 'react'
import '../Styles/Form.css'
import { IState as Props } from '../App'

interface IProps{
    people: Props['people']
    setPeople:  React.Dispatch<React.SetStateAction<Props['people']>>
}

const Form: React.FC<IProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "", 
        note: "", 
        url: ""
    })

    // if we return a string here, it will throw an error....
    const handleChange = (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        // alert("Working")
        if(
            !input.name ||
            !input.age ||
            !input.url
        ){
            alert("invalid inputs")
            return
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url
            }
        ])

        setInput({
            name: "",
            age: "", 
            note: "", 
            url: ""
        })
    }

  return (
      <div className="form">
          <h3>Form Component</h3>

          <input 
            type="text" 
            placeholder='Name'
            value={input.name}
            name='name'
            onChange={handleChange}
          />

         <input 
            type="number" 
            placeholder='Age'
            value={input.age}
            name='age'
            onChange={handleChange}
          />

         <input 
            type="text" 
            placeholder='Url'
            value={input.url}
            name='url'
            onChange={handleChange}
          /> <br />

        <textarea 
            placeholder='Note'
            value={input.note}
            name='note'
            onChange={handleChange}
        /> <br />

        <button
            onClick={handleClick}
        >
            Submit
        </button>
      </div>
  )
}

export default Form