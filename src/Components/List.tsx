import React from 'react'
import '../Styles/List.css';
import { IState as IProps } from '../App' // this is done to repeat repetition...

// interface IProps{
//     people: {
//       name: string
//       age: number
//       url: string
//       note?: string
//     }[]
//   }

const List: React.FC<IProps> = ({ people }) => {
    console.log(people)

    // typescript makes you put a return on your functions... 
    const mappedPeople: JSX.Element[] = people.map(person => {
       return(
            <div className='list-map' key={person.name}>
                <img src={person.url} alt="image" />
                <h3>{person.name} {person.age}</h3>
                <p>{person.note}</p>   
            </div>
       )
    })

  return (
    <div className='list'>
        {mappedPeople}
        {/* <p>Why is it not showing </p> */}
    </div>
  )
}

export default List