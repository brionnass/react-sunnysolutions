import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import choosesunscreen from '../images/choosesunscreen.jpg';
import './Sunscreens.css';

function Sunscreens() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        shortDescription: '',
        fullDescription: '',
        spf: '',
        price: '',
        image: '',
        features: '',
        mainIngredients: '',
    });

    const fetchProducts = () => {
        fetch('https://server-project-2ni3.onrender.com/api/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products.');
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((err) => setError(err.message));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleEdit = (product) => {
        setFormData({
            ...product,
            features: product.features.join(', '),
            mainIngredients: product.mainIngredients.join(', '),
        });
        setEditMode(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const url = editMode
            ? `https://server-project-2ni3.onrender.com/api/products/${formData.id}`
            : 'https://server-project-2ni3.onrender.com/api/products';

        const method = editMode ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    features: formData.features.split(',').map((f) => f.trim()),
                    mainIngredients: formData.mainIngredients.split(',').map((i) => i.trim()),
                }),
            });

            if (response.ok) {
                const updatedProduct = await response.json();

                if (editMode) {
                    setProducts((prev) =>
                        prev.map((product) =>
                            product.id === updatedProduct.product.id ? updatedProduct.product : product
                        )
                    );
                    setSuccess('Product updated successfully!');
                } else {
                    setProducts((prev) => [...prev, updatedProduct.product]);
                    setSuccess('Product added successfully!');
                }

                resetForm();
            } else {
                setError('Failed to save the product.');
            }
        } catch (err) {
            setError('Error connecting to the server.');
        }
    };

    const handleDelete = async (id) => {
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch(`https://server-project-2ni3.onrender.com/api/products/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setProducts((prev) => prev.filter((product) => product.id !== id));
                setSuccess('Product deleted successfully!');
            } else {
                setError('Failed to delete product.');
            }
        } catch (err) {
            setError('Error connecting to the server.');
        }
    };

    const resetForm = () => {
        setFormData({
            id: '',
            name: '',
            shortDescription: '',
            fullDescription: '',
            spf: '',
            price: '',
            image: '',
            features: '',
            mainIngredients: '',
        });
        setEditMode(false);
    };

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
                backgroundImage={choosesunscreen}
                title="Explore Our Sunscreens"
                subtitle="Find the perfect sunscreen to keep your skin safe and healthy under the sun."
            />

            {/* Error and Success Messages */}
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}

            {/* Add/Edit Product Form */}
            {editMode && (
                <section className="edit-sunscreen-form">
                    <h3>Edit Product</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Sunscreen Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="spf">SPF Level:</label>
                        <input
                            type="number"
                            id="spf"
                            name="spf"
                            value={formData.spf}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="price">Price:</label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />

                        <label htmlFor="shortDescription">Short Description:</label>
                        <textarea
                            id="shortDescription"
                            name="shortDescription"
                            rows="2"
                            value={formData.shortDescription}
                            onChange={handleInputChange}
                            required
                        ></textarea>

                        <label htmlFor="fullDescription">Full Description:</label>
                        <textarea
                            id="fullDescription"
                            name="fullDescription"
                            rows="4"
                            value={formData.fullDescription}
                            onChange={handleInputChange}
                            required
                        ></textarea>

                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Features (comma-separated):</label>
                        <input
                            type="text"
                            id="features"
                            name="features"
                            value={formData.features}
                            onChange={handleInputChange}
                            required
                        />

                        <label>Main Ingredients (comma-separated):</label>
                        <input
                            type="text"
                            id="mainIngredients"
                            name="mainIngredients"
                            value={formData.mainIngredients}
                            onChange={handleInputChange}
                            required
                        />

                        <button type="submit">Update Product</button>
                        <button type="button" onClick={resetForm}>
                            Cancel
                        </button>
                    </form>
                </section>
            )}

            {/* Product Grid Section */}
            <section className="product-grid">
                <h2 className="section-title">Our Best-Selling Sunscreens</h2>
                <div className="product-gallery">
                    {products.map((product) => (
                        <div className="product-item" key={product.id}>
                            <img
                                src={`https://server-project-2ni3.onrender.com${product.image}`}
                                alt={product.name}
                            />
                            <h3>{product.name}</h3>
                            <p>{product.shortDescription}</p>
                            <button onClick={() => handleEdit(product)}>Edit</button>
                            <button onClick={() => handleDelete(product.id)}>Delete</button>
                            <button onClick={() => showModal(product)}>Learn More</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recommendations Table */}
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

            {/* Modal for Product Details */}
            {selectedProduct && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={closeModal}>
                            &times;
                        </span>
                        <h2>{selectedProduct.name}</h2>
                        <img
                            src={`https://server-project-2ni3.onrender.com${selectedProduct.image}`}
                            alt={selectedProduct.name}
                        />
                        <p>
                            <strong>SPF:</strong> {selectedProduct.spf}
                        </p>
                        <p>
                            <strong>Price:</strong> {selectedProduct.price}
                        </p>
                        <p>
                            <strong>Description:</strong> {selectedProduct.fullDescription}
                        </p>

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
