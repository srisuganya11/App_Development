// src/Components/UI/Navbar.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Assets/CSS/Navbar.css';
import { CartContext } from './CartContext';
import { WishContext } from './WishContext';
import { FaShoppingCart, FaUser, FaSearch, FaHeart } from 'react-icons/fa';

const Navbar = () => {
    const { cartItems } = useContext(CartContext);
    const { wishlist } = useContext(WishContext);
    const cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    const wishlistItemCount = wishlist.length;
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase();
        if (query.includes('men')) {
            handleClick('men');
        } else if (query.includes('women')) {
            handleClick('women');
        } else {
            alert('No matching category found.');
        }
    };

    const handleClick = (category) => {
        navigate(`/attire-category/${category}`);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className="navbar-logo">Fashion Flare</Link>
                </div>
                <div className="navbar-center">
                    <Link to="/home" className="navbar-item">Home</Link>
                    <Link to="/attire" className="navbar-item">Attire</Link>
                    <Link to="/about" className="navbar-item">About Us</Link>
                    <Link to="/contact" className="navbar-item">Contact Us</Link>
                    <Link to="/swapping" className="navbar-item">Swapping</Link>
                </div>
                <div className="navbar-right">
                    <form onSubmit={handleSearch} className="search-form">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="search-bar" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)} 
                        />
                        <button type="submit" className="search-button">
                            <FaSearch />
                        </button>
                    </form>
                    <div className="navbar-actions">
                        <Link to="/" className="navbar-item">
                            <FaUser />
                        </Link>
                        <Link to="/wishlist" className="navbar-item">
                            <FaHeart color={wishlistItemCount > 0 ? 'red' : 'white'} />
                        </Link>
                        <Link to="/cart" className="navbar-item">
                            <FaShoppingCart />
                            {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
