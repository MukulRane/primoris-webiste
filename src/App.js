import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TechnicalConsulting from './pages/TechnicalConsulting/TechnicalConsulting';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import ERPFunctionalConsulting from './pages/ERPFunctionalConsulting/ERPFunctionalConsulting';
import BusinessConsulting from './pages/BusinessConsulting/BusinessConsulting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technical-consulting" element={<TechnicalConsulting />} />
          <Route path="/erp-functional-consulting" element={<ERPFunctionalConsulting />} />
          <Route path="/business-consulting" element={<BusinessConsulting />} />
          {/* Add other routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
