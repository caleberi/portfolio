import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PortfolioPage from './Pages/PortfolioPage/PortfolioPage';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </BrowserRouter>
  )
}
 
export default App;

