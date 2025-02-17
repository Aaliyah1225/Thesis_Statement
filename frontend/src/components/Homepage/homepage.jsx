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
        <h1>Not registered yet? Click here to sign in</h1>
        <button onClick={() => navigate("/signup")}>Sign up</button>
        <h1>Already registered?</h1>
        <button onClick={() => navigate("/login")}>Login</button>
      </div>
    );
  }

  export default Homepage;