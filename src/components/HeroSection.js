import React from 'react';
import './HeroSection.css';

function HeroSection({ backgroundImage, title, subtitle, buttonText, buttonLink }) {
    const sectionStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <section className="hero-section" style={sectionStyle}>
            <div className="hero-content">
                <h1>{title}</h1>
                <p>{subtitle}</p>
                {buttonText && buttonLink && (
                    <a href={buttonLink} className="hero-button">
                        {buttonText}
                    </a>
                )}
            </div>
        </section>
    );
}

export default HeroSection;
