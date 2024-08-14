import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/Offer.css';
import offerImage1 from '../../Assets/Images/off4.jpg';
import offerImage2 from '../../Assets/Images/off2.png';
import offerImage3 from '../../Assets/Images/off3.png';

const Offer = () => {
    const navigate = useNavigate();

    const handleOfferClick = () => {
        navigate('/attire');
    };

    return (
        <div className="offers-container">
            <div className="offer-box" onClick={handleOfferClick}>
                <img src={offerImage1} alt="Offer 1" className="offer-image" />
            </div>
            <div className="offer-box" onClick={handleOfferClick}>
                <img src={offerImage2} alt="Offer 2" className="offer-image" />
            </div>
            <div className="offer-box" onClick={handleOfferClick}>
                <img src={offerImage3} alt="Offer 3" className="offer-image" />
            </div>
        </div>
    );
};

export default Offer;
