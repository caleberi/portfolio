import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import List from './Components/List';
import TodoPage from './Pages/TodoPage'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import Todo from './Components/Todo';


export interface IState{
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  // const [number, setNumber] = useState<number | string | boolean>(6)

  const [person, setPerson] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 20,
      url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      note: "Allergic to staying on the same team"
    }
  ])
  // we dont define complicated states inside tha ankle brackets, we do it using the interfaces...
  // const [person, setPerson] = useState<{age: number, name: string}[]>([])


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <div className="App">
            <h2>People Invited to my party</h2>
            <List people={person}/>
            
            <Form people={person} setPeople={setPerson}/>
          </div>
        } />

        {/* SECOND ROUTE */}
        <Route path="/todo" element={<TodoPage />}/>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
