import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './BuyingGuide.css';

function BuyingGuide() {
    return (
        <div className="buying-guide">
            <Header />
            <section className="sunscreen-types-section">
                <h2 className="section-title">Types of Sunscreens</h2>
                <table className="sunscreen-types-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Mineral Sunscreen</th>
                            <th>Chemical Sunscreen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Active Ingredients</td>
                            <td>Zinc oxide, Titanium dioxide</td>
                            <td>Oxybenzone, Avobenzone, Octinoxate, Homosalate</td>
                        </tr>
                        <tr>
                            <td>How it Works</td>
                            <td>Sits on top of the skin and physically reflects UV rays</td>
                            <td>Absorbs UV rays and converts them into heat</td>
                        </tr>
                        <tr>
                            <td>Suitability for Skin Types</td>
                            <td>Ideal for sensitive skin or acne-prone skin, gentle on skin</td>
                            <td>Better for daily wear or if you prefer lightweight feel</td>
                        </tr>
                        <tr>
                            <td>Time to Effectiveness</td>
                            <td>Works immediately after application</td>
                            <td>Needs 20 minutes to absorb before sun exposure</td>
                        </tr>
                        <tr>
                            <td>Feel/Appearance</td>
                            <td>May leave a white cast or thicker texture</td>
                            <td>Lightweight, often clear and blends seamlessly</td>
                        </tr>
                        <tr>
                            <td>Environmental Impact</td>
                            <td>Reef-safe (usually free of harmful chemicals)</td>
                            <td>Some formulations can be harmful to coral reefs</td>
                        </tr>
                        <tr>
                            <td>Water Resistance</td>
                            <td>Typically water-resistant</td>
                            <td>Water-resistant formulas available, but may need reapplication more frequently</td>
                        </tr>
                        <tr>
                            <td>Longevity</td>
                            <td>Lasts longer on the skin, better for sensitive areas (like face)</td>
                            <td>More frequent reapplication may be needed, depending on the SPF level</td>
                        </tr>
                        <tr>
                            <td>SPF Range</td>
                            <td>Usually ranges from SPF 30 to SPF 50</td>
                            <td>Wide range available, from SPF 15 to SPF 100</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <Footer />
        </div>
    );
}

export default BuyingGuide;
