import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Team from "./pages/Team";
import Residents from "./pages/Residents";
import IncidentForm from "./components/IncidentForm";
import ResidentDetail from "./components/ResidentComps/ResidentDetails";
import SignUp from "./components/SignupComps/SignUp";
import SignIn from "./components/SignupComps/SignIn";
import AddResident from "./components/ResidentComps/AddResident";
import ResidentLog from "./components/ResidentComps/ResidentLog";
import AllResidentsLogs from "./components/ResidentComps/AllResidentsLogs";
import NewLog from "./components/ResidentComps/NewLog";
import ResidentDailyLog from "./pages/ResidentDailyLog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Residents" element={<Residents />} />
        <Route path="/IncidentForm" element={<IncidentForm />} />
        <Route path="/ResidentDetail" element={<ResidentDetail />} />{" "}
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/AddResident" element={<AddResident />} />
        <Route path="/ResidentLog" element={<ResidentLog />} />
        <Route path="/AllResidentsLog" element={<AllResidentsLogs />} />
        <Route path="/NewLog" element={<NewLog/>} />
        <Route path="/ResidentDailyLog" element={<ResidentDailyLog/>} />





      </Routes>
    </BrowserRouter>
  );
}

export default App;
