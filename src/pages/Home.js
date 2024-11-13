import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products'; // This will list the products
import './Home.css';

function Home() {
    return (
        <div>
            <Header />
            <HeroSection
                title="Explore Our Sunscreen"
                subtitle="Your skin deserves the best protection under the sun!"
                buttonText="Explore"
                buttonLink="/sunscreens"
                backgroundImage="/images/beach-background.jpg"
            />
            
            {/* Products Section */}
            <Products />

            <Footer />
        </div>
    );
}

export default Home;

