import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import beachBackground from '../images/beach-background.jpg';

function Home() {
  return (
    <div>
      <Header />
      <HeroSection
      backgroundImage={beachBackground} 
        title="Explore Our Sunscreen"
        subtitle="Your skin deserves the best protection under the sun!"

        buttonText="Explore"
        buttonLink="/sunscreens"
      />
      <Products />
      <Footer />
    </div>
  );
}

export default Home;
