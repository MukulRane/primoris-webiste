import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarMobileView from './components/NavbarMobileView/NavbarMobileView'; // Import the mobile navbar component
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
import SapDevelopment from './pages/SapDevelopment/SapDevelopment';
import RiskManagement from './pages/RiskManagement/RiskManagement';
import BigDataService from './pages/BigDataService/BigDataService';
import QualityAssurance from './pages/QualityAssurance/QualityAssurance';
import SapHana from './pages/SapHana/SapHana';
import SapCloudAnalytics from './pages/SapCloudAnalytics/SapCloudAnalytics';
import SapFiori from './pages/SapFiori/SapFiori';
import SapCRM from './pages/SapCRM/SapCRM';
import SapHybris from './pages/SapHybris/SapHybris';
import EnterpriseManagedArchieve from './pages/EnterpriseManagedArchieve/EnterpriseManagedArchieve';
import EMAForSAP from './pages/EMAForSAP/EMAForSAP';
import GlobalCaseManagement from './pages/GlobalCaseManagement/GlobalCaseManagement';
import MTechnician from './pages/MTechnician/MTechnician';
import OrgChartViewer from './pages/OrgChartViewer/OrgChartViewer';
import AssetManagement from './pages/AssetManagement/AssetManagement';
import News from './pages/News/News';
import Careers from './pages/Careers/Careers';
import Blogs from './pages/Blogs/Blogs';
import SapSupplyChainManagement from './pages/SapSupplyChainManagement/SapSupplyChainManagement';
import AboutUsPage from './pages/AboutUs/AboutUs';
import ContactUs from './pages/ContactUs/ContactUs';
import { WindowDimensionsProvider, useWindowDimensions } from './WindowDimensionsProvider';

function App() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;

  return (
    <div className="App">
      <header className="App-header">
        {isMobile ? <NavbarMobileView /> : <Navbar />}
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
          <Route path="/sap-consulting" element={<SapDevelopment />} />
          <Route path="/risk-management" element={<RiskManagement />} />
          <Route path="/big-data-consulting" element={<BigDataService />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/sap-s4-hana-service" element={<SapHana />} />
          <Route path="/sap-cloud-analytics" element={<SapCloudAnalytics />} />
          <Route path="/sap-fiori" element={<SapFiori />} />
          <Route path="/sap-crm" element={<SapCRM />} />
          <Route path="/sap-hybris" element={<SapHybris />} />
          <Route path="/enterprise-managed-archive" element={<EnterpriseManagedArchieve />} />
          <Route path="/enterprise-managed-archive-sap" element={<EMAForSAP />} />
          <Route path="/global-case-management-ediscovery" element={<GlobalCaseManagement />} />
          <Route path="/mtechnician" element={<MTechnician />} />
          <Route path="/orgchart-viewer" element={<OrgChartViewer />} />
          <Route path="/asset-management" element={<AssetManagement />} />
          <Route path="/news" element={<News />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/sap-supply-chain-management" element={<SapSupplyChainManagement />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* Add other routes here as needed */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

const AppWrapper = () => (
  <WindowDimensionsProvider>
    <App />
  </WindowDimensionsProvider>
);

export default AppWrapper;
