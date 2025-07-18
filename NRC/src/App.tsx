import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CompanyDetails from './pages/CompanyDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/companydetails" element={<CompanyDetails />} />
    </Routes>
  );
}

export default App;
