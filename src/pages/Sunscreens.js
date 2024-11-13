import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import './Sunscreens.css';

function Sunscreens() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const showModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    return (
        <div>
            <Header />
            <HeroSection
                backgroundImage="/images/choosesunscreen.jpg"
                title="Explore Our Sunscreens"
                subtitle="Find the perfect sunscreen to keep your skin safe and healthy under the sun."
            />

            {/* Product Grid Section */}
            <section className="product-grid">
                <h2 className="section-title">Our Best-Selling Sunscreens</h2>
                <div className="product-gallery">
                    {products.map(product => (
                        <div className="product-item" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.shortDescription}</p>
                            <button className="product-button" onClick={() => showModal(product)}>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommendation Section */}
            <section className="recommendation-section">
                <h2>Find the Right Sunscreen for You</h2>
                <table className="recommendation-table">
                    <thead>
                        <tr>
                            <th>Factor</th>
                            <th>Recommended Sunscreen</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Skin Tone</td>
                            <td>
                                Darker Skin: Look for sheer or clear sunscreens that don’t leave a white cast. Tinted sunscreens can also blend well with darker tones.<br />
                                Lighter Skin: Broad-spectrum sunscreen with SPF 30 or higher, and water-resistant for long sun exposure. Tinted sunscreens may also be helpful for even coverage.
                            </td>
                        </tr>
                        <tr>
                            <td>Skin Sensitivity</td>
                            <td>Choose a sunscreen labeled as “hypoallergenic” or “for sensitive skin.” Fragrance-free and alcohol-free options help prevent irritation. Look for gentle ingredients.</td>
                        </tr>
                        <tr>
                            <td>Weather</td>
                            <td>
                                Hot and Sunny Weather: Use SPF 50+ and broad-spectrum protection, ideally water-resistant for sweat or water activities.<br />
                                Cold or Cloudy Weather: SPF 30 is typically sufficient, but make sure it’s broad-spectrum to protect against both UVA and UVB rays.
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>
                                Children and Babies: Use sunscreen with SPF 30-50, specially formulated for children to avoid irritation.<br />
                                Adults: SPF 30 or higher for daily use, and SPF 50+ for outdoor activities. Use formulations suited to your skin type.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Modal for Full Product Details */}
            {selectedProduct && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h2>{selectedProduct.name}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <p><strong>SPF:</strong> {selectedProduct.spf}</p>
                        <p><strong>Price:</strong> {selectedProduct.price}</p>
                        <p><strong>Description:</strong> {selectedProduct.fullDescription}</p>
                        
                        <div>
                            <strong>Features:</strong>
                            <ul>
                                {selectedProduct.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <strong>Main Ingredients:</strong>
                            <ul>
                                {selectedProduct.mainIngredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
}

export default Sunscreens;
