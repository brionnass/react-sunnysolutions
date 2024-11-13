import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './AboutUs.css';

function AboutUs() {
    return (
        <div>
            <Header />
            <main>
                <h2 className="subheader">About Sunny Solutions</h2>
                <div className="about-us-container">
                    <img src="/images/aboutus.png" alt="Sunscreen products" className="hero-image" />
                    <div className="about-text">
                        <p>
                            Sunny Solutions was founded with a simple yet powerful goal: to make sun protection accessible, effective, and enjoyable for everyone. Inspired by the natural beauty of the outdoors and the need to protect it, we developed a range of sunscreens that are not only gentle on your skin but also kind to the environment. Our journey began with a vision to create a product that combines the best of science and nature, offering high-quality sun protection that you can trust.
                        </p>
                        <p>
                            We believe that enjoying the sun should never come at the cost of your health or the planet. That’s why we are committed to using safe, eco-friendly ingredients that are both effective and sustainable. From the initial idea to the final product, every step of our process is driven by a passion for excellence, innovation, and customer satisfaction.
                        </p>
                    </div>
                </div>
                <div className="mission-statement">
                    <h2>Our Mission Statement</h2>
                    <p>
                        At Sunny Solutions, our mission is to empower everyone to enjoy the sun safely. We are dedicated to creating high-quality, eco-friendly sunscreen products that provide the best protection against harmful UV rays while being gentle on your skin and the environment. Our passion for innovation and our commitment to sustainability drive us to develop formulas that not only shield you from the sun but also support a healthier planet. Whether you're at the beach, on a hike, or in your everyday life, we're here to help you embrace the sunshine with confidence.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutUs;
