import "./Homepage.css";
import { useNavigate } from "react-router-dom";

function Homepage() {

  const navigate = useNavigate();
  
    return (
      <div>
        <p>NutriFit</p>

        <h2>Welcome to NutriFit! The Nutrition App for you!</h2>

        <h3>About</h3>
        <p>Our app is designed to help you keep track of your nutrition goals and help you reach them!</p>

        <h3>Services</h3>
        <h4>Click Here to check out the Dashboard!</h4>
        <button onClick={() => navigate("/dashboard")}>Main Dashboard</button>
        <h4>Want to check your BMR? Click on the button below!</h4>
        <button onClick={() => navigate("/calculator")}>BMR Calculator</button>
      </div>
    );
  }

  export default Homepage;