import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to enable routing

function Products() {
    const products = [
        {
            id: 1,
            name: "Sunny SPF 50",
            image: "/images/sunscreen1.jpg",
            shortDescription: "High protection sunscreen.",
        },
        {
            id: 2,
            name: "Sunny SPF 30",
            image: "/images/sunscreen2.jpg",
            shortDescription: "Daily protection against UV rays.",
        },
        {
            id: 3,
            name: "Sunny Kids SPF 40",
            image: "/images/sunscreen3.jpg",
            shortDescription: "Gentle sunscreen for children.",
        },
        {
            id: 4,
            name: "Sunny Sport SPF 60",
            image: "/images/sunscreen4.jpg",
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


