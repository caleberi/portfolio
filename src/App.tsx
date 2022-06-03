import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QuizPage } from './Pages/QuizPage'
import VictorPage from './Pages/VictorPage';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<QuizPage />}/>

        <Route path="/victor" element={<VictorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App;

