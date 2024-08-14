import React, { useState } from 'react';
import '../../Assets/CSS/Contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const contactData = { name, email, message };

        try {
            const response = await fetch('http://localhost:8080/api/contact/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending your message.');
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" id="email" name="email" placeholder="Your Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <textarea id="message" name="message" rows="4" placeholder="Your Message" required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit" className="submit-button">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
