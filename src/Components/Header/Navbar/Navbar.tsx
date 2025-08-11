import { useState } from 'react';
import './Navbar.css';
import Button from "../../Button/Button.tsx";
import Logo from "../Logo/Logo.tsx";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav>
                <div className="logo">
                    <Logo/>
                </div>

                <button className="menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <ul className={isMenuOpen ? 'active' : ''}>
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) => (isActive ? "active-link" : "")}
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/fusionStation"
                                className={({ isActive }) => (isActive ? "active-link" : "")}
                            >
                                Fusion Station
                            </NavLink>
                        </li>
                        <li>Coaching</li>
                        <li>Digital Recaps</li>
                        <li>On-Air</li>
                        <li>Mosaic Street</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <Button className={`get-started ${isMenuOpen ? 'active' : ''}`} text="Get Started" />
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;