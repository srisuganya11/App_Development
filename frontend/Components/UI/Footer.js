// src/Components/UI/Footer.js
import React from 'react';
import '../../Assets/CSS/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>We are committed to promoting sustainable fashion through clothing rental and swapping. Join us to make a difference!</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@FashionFlare.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Sustainable St, Fashion City, FC 12345</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Sustainable Fashion. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
