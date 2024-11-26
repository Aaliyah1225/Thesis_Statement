import "./App.css";
import Homepage from "./components/Homepage/homepage";
import Login from "./components/Login";
import Registers from "./components/Registers";
import DailyCalorie from "./components/dashboard/DailyCalorie";
import BreakfastDash from "./components/dashboard/BreakfastDash";
import LunchDash from "./components/dashboard/LunchDash";
import DinnerDash from "./components/dashboard/DinnerDash";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registers />} />
          <Route path="/dashboard" element={<DailyCalorie />} />
          <Route path="/dashboard/breakfast" element={<BreakfastDash />} />
          <Route path="/dashboard/lunch" element={<LunchDash />} />
          <Route path="/dashboard/dinner" element={<DinnerDash />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
