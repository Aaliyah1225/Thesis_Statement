import "./App.css";
import Homepage from "./components/homepage";
import Login from "./components/Login";
import Registers from "./components/Registers";
import DailyCalorie from "./components/Dashboard/DailyCalorie";
import BreakfastDash from "./components/Dashboard/BreakfastDash";
import LunchDash from "./components/Dashboard/LunchDash";
import DinnerDash from "./components/Dashboard/DinnerDash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registers />} />
          <Route path="/dashboard" element={<DailyCalorie />} />
          <Route path="/dashboard/breakfast" element={<BreakfastDash />} />
          <Route path="/dashboard/lunch" element={<LunchDash />} />
          <Route path="/dashboard/dinner" element={<DinnerDash />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
