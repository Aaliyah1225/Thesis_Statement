import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to="/">Homepage</Link>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>

        </div>
    );
}

export default NavBar;