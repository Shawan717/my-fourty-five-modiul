import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <nav className="mt-10">
                <Link className="mr-4" to="/">Home</Link>
                <Link className="mr-4" to="/user">User</Link>
                <Link className="mr-4" to="/About">About</Link>
                <Link className="mr-4" to="/contact">Contact Us</Link>
                
            </nav>
        </div>
    );
};

export default Header;