// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import './Home.css'; // Import the CSS file

function Home() {
  // Inline style for hero section background image
  const heroStyle = {
    backgroundImage: 'url("images/beach-background.jpg")', // Relative path without leading slash
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 5%',
    color: 'white',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Sunny Solutions</div>
        <nav className="navigation-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/sunscreens">Sunscreens</Link></li>
            <li><Link to="/buying-guide">Buying Guide</Link></li>
            <li><Link to="/admin">Administrator</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section" style={heroStyle}>
        <div className="hero-content">
          <h1>Explore Our Sunscreen</h1>
          <p>Your skin deserves the best protection under the sun!</p>
          <Link to="/sunscreens" className="hero-button">Explore</Link>
        </div>
      </section>

      <section className="featured-products">
        <h2>Our Featured Sunscreens</h2>
        <div className="product-gallery">
          <div className="product-item">
            <img src="/images/sunscreen1.jpg" alt="Sunscreen 1" />
            <h3>Sunscreen 1</h3>
            <p>High SPF, long-lasting protection.</p>
            <Link to="/product-detail1" className="product-button">Learn More</Link>
          </div>
          <div className="product-item">
            <img src="/images/sunscreen2.jpg" alt="Sunscreen 2" />
            <h3>Sunscreen 2</h3>
            <p>Water-resistant, perfect for sports.</p>
            <Link to="/product-detail2" className="product-button">Learn More</Link>
          </div>
          <div className="product-item">
            <img src="/images/sunscreen3.jpg" alt="Sunscreen 3" />
            <h3>Sunscreen 3</h3>
            <p>Lightweight, everyday use.</p>
            <Link to="/product-detail3" className="product-button">Learn More</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Sunny Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home; // Ensure the default export


