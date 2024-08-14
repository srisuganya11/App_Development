import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/Carousel.css';
import carouselImage1 from '../../Assets/Images/carousel1.jpg';
import carouselImage2 from '../../Assets/Images/carousel2.jpg';
import carouselImage3 from '../../Assets/Images/carousel3.jpg';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const images = [carouselImage1, carouselImage2, carouselImage3];
    const texts = [
        "Discover the latest trends in sustainable fashion.",
        "Join the movement towards eco-friendly attire.",
        "Embrace sustainable fashion with our new collection."
    ];

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const handleShopNowClick = () => {
        navigate('/attire'); // Navigate to the Attire page
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [images.length]);

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((image, index) => (
                    <div key={index} className="carousel-item">
                        <div className="carousel-content">
                            <div className="carousel-text">
                                <p>{texts[index]}</p>
                                <button className="shop-now-button" onClick={handleShopNowClick}>Shop Now</button>
                            </div>
                            <div className="carousel-image">
                                <img src={image} alt="Fashion" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="carousel-dots">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
