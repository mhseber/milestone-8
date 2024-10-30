import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>

            <nav>
                <h3>My Website</h3>
                <Link to="/">Home</Link>
                <Link to="/users">Users</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
            </nav>
        </div>
    );
};

export default Header;