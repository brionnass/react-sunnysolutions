import { Chart, registerables } from 'chart.js';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Administrator.css';

Chart.register(...registerables);

function Administrator() {
    const [formData, setFormData] = useState({
        name: '',
        shortDescription: '',
        fullDescription: '',
        spf: '',
        price: '',
        image: '', // URL for image
        features: '',
        mainIngredients: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        let sunscreenChart;

        const createChart = () => {
            const ctx = document.getElementById('sunscreenPopularityChart').getContext('2d');
            sunscreenChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Sunscreen 1', 'Sunscreen 2', 'Sunscreen 3', 'Sunscreen 4'],
                    datasets: [{
                        data: [30, 25, 20, 25],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { position: 'top' },
                    }
                }
            });
        };

        createChart();

        return () => {
            if (sunscreenChart) sunscreenChart.destroy();
        };
    }, []);

    // Handle text input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        try {
            const response = await fetch('https://server-project-2ni3.onrender.com/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    features: formData.features.split(',').map(feature => feature.trim()),
                    mainIngredients: formData.mainIngredients.split(',').map(ingredient => ingredient.trim()),
                }),
            });

            if (response.ok) {
                setSuccess("Product added successfully!");
                setFormData({
                    name: '',
                    shortDescription: '',
                    fullDescription: '',
                    spf: '',
                    price: '',
                    image: '',
                    features: '',
                    mainIngredients: '',
                });
            } else {
                const result = await response.json();
                setError(result.message || "Failed to add product.");
            }
        } catch (err) {
            setError("Error connecting to the server.");
        }
    };

    return (
        <div className="admin-page">
            <Header />
            <main className="admin-section">
                <h2 className="section-title">Administrator Dashboard</h2>

                {/* Manage Reviews Section */}
                <div className="reviews-management">
                    <h3>Manage Reviews</h3>
                    <ul className="reviews-list">
                        <li>
                            <span>Review 1: "Great sunscreen, highly recommend!"</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                        <li>
                            <span>Review 2: "ok sunscreen, highly recommend!"</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                        <li>
                            <span>Review 3: "good sunscreen, highly recommend!"</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                        <li>
                            <span>Review 4: "bad sunscreen, highly recommend!"</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                    </ul>
                </div>

                {/* Sunscreen Popularity Graph Section */}
                <div className="sunscreen-graph-section">
                    <h3>Sunscreen Popularity</h3>
                    <canvas id="sunscreenPopularityChart"></canvas>
                </div>

                {/* Add New Sunscreen Section */}
                <div className="add-sunscreen-form">
                    <h3>Add New Sunscreen</h3>
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
                        ></textarea>

                        <label htmlFor="fullDescription">Full Description:</label>
                        <textarea
                            id="fullDescription"
                            name="fullDescription"
                            rows="4"
                            value={formData.fullDescription}
                            onChange={handleInputChange}
                        ></textarea>

                        <label htmlFor="image">Image URL:</label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            placeholder="Enter image URL"
                            required
                        />

                        <label>Features (comma-separated):</label>
                        <input
                            type="text"
                            id="features"
                            name="features"
                            value={formData.features}
                            onChange={handleInputChange}
                            placeholder="e.g., Water-resistant, Non-greasy"
                            required
                        />

                        <label>Main Ingredients (comma-separated):</label>
                        <input
                            type="text"
                            id="mainIngredients"
                            name="mainIngredients"
                            value={formData.mainIngredients}
                            onChange={handleInputChange}
                            placeholder="e.g., Zinc Oxide, Aloe Vera"
                            required
                        />

                        <button type="submit" className="submit-btn">Add Sunscreen</button>
                    </form>
                    {/* Success Message at Bottom */}
                    {success && <p className="success" style={{ color: 'green' }}>{success}</p>}


                    {error && <p className="error">{error}</p>}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Administrator; 