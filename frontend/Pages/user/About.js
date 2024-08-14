// src/Pages/user/About.js
import React from 'react';
import '../../Assets/CSS/About.css';
import ReviewCard from '../../Components/UI/ReviewCard';

const steps = [
    { title: "Browse", description: "Explore our extensive collection of clothing for men, women, and children." },
    { title: "Rent", description: "Choose your favorite pieces and rent them for a specified period." },
    { title: "Enjoy", description: "Wear your rented clothing and enjoy your events in style." },
    { title: "Return", description: "Return the items after use, and we’ll take care of the cleaning." }
];

const reviews = [
    { name: "John Doe", review: "Great service and fantastic quality!", rating: 5 },
    { name: "Jane Smith", review: "Loved the variety of options available.", rating: 4 },
    { name: "Emily Johnson", review: "Super convenient and eco-friendly!", rating: 5 }
];

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>Welcome to our Sustainable Fashion Rental and Clothing Swapping Platform. Our mission is to promote sustainable fashion through innovative and eco-friendly practices.</p>
            
            <h2>Our Vision</h2>
            <p>We envision a world where fashion is sustainable, affordable, and accessible to everyone. By offering a platform for renting and swapping clothing, we aim to reduce waste and promote a more sustainable lifestyle.</p>
            
            <h2>Why Choose Us?</h2>
            <ul>
                <li><strong>Wide Selection:</strong> We offer a diverse range of styles and sizes to fit every occasion.</li>
                <li><strong>Affordable Rates:</strong> Enjoy the latest fashion trends without breaking the bank.</li>
                <li><strong>Quality Assurance:</strong> Each item is carefully inspected to ensure the highest quality.</li>
                <li><strong>Eco-Friendly:</strong> By renting clothing, you are contributing to a reduction in fashion waste.</li>
            </ul>

            <h2>How It Works</h2>
            <div className="timeline">
                {steps.map((step, index) => (
                    <div key={index} className="timeline-step">
                        <div className="timeline-content">
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Customer Reviews</h2>
            <div className="reviews-container">
                {reviews.map((review, index) => (
                    <ReviewCard 
                        key={index} 
                        name={review.name} 
                        review={review.review} 
                        rating={review.rating} 
                    />
                ))}
            </div>
        </div>
    );
};

export default About;
