import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/Gender.css';
import menImage from '../../Assets/Images/forhim2.webp';
import womenImage from '../../Assets/Images/forher3.webp';

const Gender = () => {
    const navigate = useNavigate();

    const handleClick = (category) => {
        navigate(`/attire-category/${category}`);
    };

    return (
        <div className="gender-section">
            <div className="gender-box" onClick={() => handleClick('men')}>
                <img src={menImage} alt="For Him" className="gender-image" />
                <div className="gender-label">FOR HIM</div>
            </div>
            <div className="gender-box" onClick={() => handleClick('women')}>
                <img src={womenImage} alt="For Her" className="gender-image" />
                <div className="gender-label">FOR HER</div>
            </div>
        </div>
    );
};

export default Gender;
