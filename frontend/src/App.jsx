import "./App.css";
import Homepage from "./components/Homepage/homepage";
import Login from "./components/Login";
import Registers from "./components/Registers";
import DailyCalorie from "./components/dashboard/DailyCalorie";
import BreakfastDash from "./components/dashboard/BreakfastDash";
import LunchDash from "./components/dashboard/LunchDash";
import DinnerDash from "./components/dashboard/DinnerDash";
import SnackDash from "./components/dashboard/SnackDash";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<><NavBar /><Homepage /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registers />} />
          <Route path="/dashboard" element={<DailyCalorie />} />
          <Route path="/dashboard/breakfast" element={<BreakfastDash />} />
          <Route path="/dashboard/lunch" element={<LunchDash />} />
          <Route path="/dashboard/dinner" element={<DinnerDash />} />
          <Route path="/dashboard/snack" element={<SnackDash />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
