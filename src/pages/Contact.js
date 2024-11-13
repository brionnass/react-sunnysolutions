import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Contact.css'; // Create this or use existing styles

function Contact() {
    const [responseMessage, setResponseMessage] = useState('');
    const [messageColor, setMessageColor] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append('access_key', '57675fc6-83a2-4461-8853-6f5d7309fff5'); // Web3Forms access key

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setResponseMessage('Thank you for your message!');
                setMessageColor('green');
                event.target.reset(); // Clear the form fields after submission
            } else {
                setResponseMessage('There was a problem with your submission.');
                setMessageColor('red');
            }
        } catch (error) {
            setResponseMessage('An error occurred while submitting the form.');
            setMessageColor('red');
        }
    };

    return (
        <div className="contact-page">
            <Header />
            <main className="contact-section">
                <h1>Contact Sunny Solutions</h1>
                <div className="container">
                    {/* Contact Form */}
                    <form id="contactForm" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="First and Last" required />

                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Email" required />

                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" placeholder="Message" required></textarea>

                        <button type="submit">Submit Form</button>
                        <p id="responseMessage" style={{ color: messageColor }}>{responseMessage}</p>
                    </form>

                    {/* Video Embed */}
                    <div className="video-container">
                        <iframe
                            src="https://www.youtube.com/embed/iJEddtGRE8U"
                            title="Sunscreen Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Contact;
