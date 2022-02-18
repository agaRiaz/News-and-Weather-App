import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <ul>
                    <li><NavLink className="navItem" to="/Both">Home</NavLink></li>

                    <li><NavLink className="navItem" to="/weather">Weather</NavLink></li>
                    <li><NavLink className="navItem" to="/news">News</NavLink></li>
                </ul>

            </div>
        </>
    )
};

export default Navbar;