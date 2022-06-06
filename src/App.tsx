import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { QuizPage } from './Pages/QuizPage'
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PortfolioPage />} />

        <Route path="/quiz" element={<QuizPage />}/>

      </Routes>
    </BrowserRouter>
  )
}
 
export default App;

