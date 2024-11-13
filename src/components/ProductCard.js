import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

function ProductCard({ imgSrc, title, description, link }) {
  return (
    <div className="product-item">
      <img src={imgSrc} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link} className="product-button">Learn More</Link>
    </div>
  );
}

export default ProductCard;
