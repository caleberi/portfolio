import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QuizPage } from './Pages/QuizPage'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<QuizPage />}/>

      </Routes>
    </BrowserRouter>
  )
}
 
export default App;

