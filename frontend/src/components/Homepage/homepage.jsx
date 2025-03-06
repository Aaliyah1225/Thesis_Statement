import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {

  const navigate = useNavigate();
  
    return (
      <div>
        <h2>NutriFit</h2>
        <h2>About</h2>
        <h2>Services</h2>
        <p>Welcome to NutriFit! The Fitness App for you!</p>
        <h1>Click Here to check out the Dashboard!</h1>
        <button onClick={() => navigate("/dashboard")}>Main Dashboard</button>
      </div>
    );
  }

  export default Homepage;