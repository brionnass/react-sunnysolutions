import React, { useState } from 'react'; // Make sure to import useState
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Toggles the menu state
    };

    return (
        <header className="header">
            <div className="logo">Sunny Solutions</div>
            <nav className={`navigation-menu ${menuOpen ? 'show' : ''}`}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/sunscreens">Sunscreens</Link></li>
                    <li><Link to="/buying-guide">Buying Guide</Link></li>
                    <li><Link to="/admin">Administrator</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
}

export default Header;
