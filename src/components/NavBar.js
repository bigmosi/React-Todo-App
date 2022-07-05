import { Outlet, Link } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
    return (
        <>
          <nav className="bg-color">
             <ul className="ps-1">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li to="/about">About</li>
             </ul>
          </nav>
          <Outlet />
        </>
    );
}

export default NavBar;