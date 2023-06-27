import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Team from './pages/Team';
import Residents from './pages/Residents';
import IncidentForm from './components/IncidentForm';
import ResidentDetail from './components/ResidentComps/ResidentDetails';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Team" element={<Team/>} />
        <Route path="/Residents" element={<Residents/>} />
        <Route path="/IncidentForm" element={<IncidentForm/>} />
        <Route path="/ResidentDetail" element={<ResidentDetail/>} />




      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
