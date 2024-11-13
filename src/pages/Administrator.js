import { Chart, registerables } from 'chart.js';
import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Administrator.css';

Chart.register(...registerables);

function Administrator() {
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
                            <span>Review 2: "Not the best for sensitive skin."</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                        <li>
                            <span>Review 3: "Affordable and effective in the sun."</span>
                            <button className="edit-btn">Edit</button>
                            <button className="delete-btn">Delete</button>
                        </li>
                        <li>
                            <span>Review 4: "Leaves a white cast on darker skin tones."</span>
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

                {/* Add Sunscreen Section */}
                <div className="add-sunscreen-form">
                    <h3>Add New Sunscreen</h3>
                    <form>
                        <label htmlFor="sunscreen-name">Sunscreen Name:</label>
                        <input type="text" id="sunscreen-name" name="sunscreen-name" required />

                        <label htmlFor="spf-level">SPF Level:</label>
                        <input type="number" id="spf-level" name="spf-level" required />

                        <label htmlFor="description">Description:</label>
                        <textarea id="description" name="description" rows="4" required></textarea>

                        <label htmlFor="sunscreen-image">Upload Image:</label>
                        <input type="file" id="sunscreen-image" name="sunscreen-image" accept="image/*" />

                        <button type="submit" className="submit-btn">Add Sunscreen</button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Administrator;


