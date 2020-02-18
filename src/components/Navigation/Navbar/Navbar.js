import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
    return(
        <nav className="Navbar">
            <div>
                <ul className="NavContainer">
                    <li className="NavItem">
                        <Link className="NavLink" to="/">Blog</Link>
                    </li>
                    <li className="NavItem">
                        <Link className="NavLink" to="/new-post">New Post</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;