import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable routing

// Import images
import sunscreen1 from '../images/sunscreen1.jpg';
import sunscreen2 from '../images/sunscreen2.jpg';
import sunscreen3 from '../images/sunscreen3.jpg';
import sunscreen4 from '../images/sunscreen4.jpg';

function Products() {
    const products = [
        {
            id: 1,
            name: "Sunny SPF 50",
            image: sunscreen1,
            shortDescription: "High protection sunscreen.",
        },
        {
            id: 2,
            name: "Sunny SPF 30",
            image: sunscreen2,
            shortDescription: "Daily protection against UV rays.",
        },
        {
            id: 3,
            name: "Sunny Kids SPF 40",
            image: sunscreen3,
            shortDescription: "Gentle sunscreen for children.",
        },
        {
            id: 4,
            name: "Sunny Sport SPF 60",
            image: sunscreen4,
            shortDescription: "High SPF for active lifestyles.",
        },
    ];

    return (
        <section className="product-grid">
            <h2 className="section-title">Our Best-Selling Sunscreens</h2>
            <div className="product-gallery">
                {products.map((product) => (
                    <div className="product-item" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.shortDescription}</p>
                        <Link to="/sunscreens" className="product-button">Learn More</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
