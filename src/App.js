import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TechnicalConsulting from './pages/TechnicalConsulting/TechnicalConsulting';
import HomePage from './pages/HomePage/HomePage';
import './App.css';
import ERPFunctionalConsulting from './pages/ERPFunctionalConsulting/ERPFunctionalConsulting';
import BusinessConsulting from './pages/BusinessConsulting/BusinessConsulting';
import ManagementConsulting from './pages/ManagementConsulting/ManagementConsulting';
import SnowflakeServicePage from './pages/SnowflakeServicePage/SnowflakeServicePage';
import ManagedServices from './pages/ManagedServices/ManagedServices';
import StaffingAndHrSolutions from './pages/StaffingAndHrSolutions/StaffingAndHrSolutions';
import DataScienceConsulting from './pages/DataScienceConsulting/DataScienceConsulting';

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
          <Route path="/management-consulting" element={<ManagementConsulting />} />
          <Route path="/snowflake-service" element={<SnowflakeServicePage />} />
          <Route path="/managed-services" element={<ManagedServices />} />
          <Route path="/staffing-hr-solutions" element={<StaffingAndHrSolutions />} />
          <Route path="/data-science-consulting" element={<DataScienceConsulting />} />
          {/* Add other routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
