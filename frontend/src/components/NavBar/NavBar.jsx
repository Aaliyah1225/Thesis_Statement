import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
            <Link to="/">Homepage</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            </nav>
        </div>
    );
}

export default NavBar;