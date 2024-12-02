import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav>
            <Link to="/">Homepage</Link>
            </nav>
            <ul>
                <li>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;