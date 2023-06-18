// Rotas.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../components/Home/Home';


function Rotas() {
  return (
   
    <Router>
      <Routes>
      <Route exact path="/" component={Home} />
    
      </Routes>
      </Router>
 
    
  );
}

export default Rotas;
