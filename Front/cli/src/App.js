import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home/Home';
import ModalArea from './components/Modals/ModalArea';
import ModalVender from './components/Modals/ModalVender';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alocacao/:id" element={<ModalArea />} />
        <Route path="/concessionaria/:modelo/:id/:area" element={<ModalVender />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
};

export default App;
