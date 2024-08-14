// src/Pages/user/Home.js
import React from 'react';
import '../../Assets/CSS/Home.css';
import Carousel from '../../Components/UI/Carousel';
import Offer from '../../Components/UI/Offer';
import Gender from '../../Components/UI/Gender'; // Import the Gender component

const Home = () => {
    return (
        <div className="home-container">
            <Carousel />
            <Offer />
            <Gender />
            
        </div>
    );
};

export default Home;
