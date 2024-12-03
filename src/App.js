import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Administrator from './pages/Administrator';
import BuyingGuide from './pages/BuyingGuide';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Sunscreens from './pages/Sunscreens';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sunscreens" element={<Sunscreens />} />
            <Route path="/buying-guide" element={<BuyingGuide />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/admin" element={<Administrator />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;



