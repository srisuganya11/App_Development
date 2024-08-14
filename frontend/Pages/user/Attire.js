import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Components/UI/CartContext';
import { WishContext } from '../../Components/UI/WishContext';
import '../../Assets/CSS/Attire.css';
import menImage1 from '../../Assets/Images/mmen1.jpeg';
import menImage2 from '../../Assets/Images/men2.jpeg';
import menImage3 from '../../Assets/Images/men3.jpeg';
import menImage4 from '../../Assets/Images/men4.jpeg';
import menImage5 from '../../Assets/Images/men5.jpeg';
import menImage6 from '../../Assets/Images/men6.jpeg';
import womenImage1 from '../../Assets/Images/women1.jpeg';
import womenImage2 from '../../Assets/Images/women2.jpeg';
import womenImage3 from '../../Assets/Images/women3.jpeg';
import womenImage4 from '../../Assets/Images/women4.jpeg';
import womenImage5 from '../../Assets/Images/women5.jpeg';
import womenImage6 from '../../Assets/Images/women6.jpeg';
import { FaHeart, FaArrowLeft } from 'react-icons/fa';

const Attire = () => {
    const { category } = useParams(); // Get the category parameter from the URL
    const { addToCart } = useContext(CartContext);
    const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishContext);
    const navigate = useNavigate();

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [sortOption, setSortOption] = useState('All');
    const [colorFilter, setColorFilter] = useState('All');
    const [filter, setFilter] = useState(category || 'all'); // Initialize filter with category or 'all'

    const products = [
        { id: 1, name: "Blue 3P-Suit Sets for Men by VAN HEUSEN", description: "FashionFlare Exclusive", price: 2500, image: menImage1, category: 'Men', color: "blue" },
        { id: 2, name: "SOJANYA Striped 3-Piece Kurta Suit For Men", description: "FashionFlare Exclusive", price: 2000, image: menImage2, category: 'Men', color: "pink" },
        { id: 3, name: "Ramraj Cotton 2-Piece Full-Sleeves Shirt & Dhoti Set For Men", description: "FashionFlare Exclusive", price: 1800, image: menImage3, category: 'Men', color: "gold" },
        { id: 4, name: "Men Checked Regular Fit Shirt with Cuffed Sleeves", description: "FashionFlare Exclusive", price: 999, image: menImage4, category: 'Men', color: "blue" },
        { id: 5, name: "Checked Shirt with Patch Pocket", description: "FashionFlare Exclusive", price: 799, image: menImage5, category: 'Men', color: "blue" },
        { id: 6, name: "Checked Slim Fit Shirt with Patch Pocket", description: "FashionFlare Exclusive", price: 1049, image: menImage6, category: 'Men', color: "black" },
        { id: 7, name: "Yuniqee Women Mini Shift Dress with Ruffles Hem For Women (Black, XL)", description: "FashionFlare Exclusive", price: 799, image: womenImage1, category: 'Women', color: "black" },
        { id: 8, name: "Only Orange Above Knee Bodycon Dress", description: "FashionFlare Exclusive", price: 899, image: womenImage2, category: 'Women', color: "orange" },
        { id: 9, name: "Zeelpin Embellished Lehenga Choli Set with Dupatta For Women", description: "FashionFlare Exclusive", price: 1029, image: womenImage3, category: 'Women', color: "black" },
        { id: 10, name: "Animal Print Fit & Flare Dress", description: "FashionFlare Exclusive", price: 799, image: womenImage4, category: 'Women', color: "black" },
        { id: 11, name: "Banarasi Silk Party Wear Saree", description: "FashionFlare Exclusive", price: 2000, image: womenImage5, category: 'Women', color: "yellow" },
        { id: 12, name: "Lightly Washed Straight Fit Jeans", description: "FashionFlare Exclusive", price: 859, image: womenImage6, category: 'Women', color: "blue" },
    ];

    const colorOptions = [
        { label: "All", color: "" },
        { label: "Black", color: "black" },
        { label: "Blue", color: "blue" },
        { label: "Orange", color: "orange" },
        { label: "Pink", color: "pink" },
        { label: "Gold", color: "gold" },
        { label: "Yellow", color: "yellow" },
    ];

    // Filter products based on category and color
    const filteredProducts = products.filter(product => {
        const categoryMatch = filter === 'all' || product.category.toLowerCase() === filter.toLowerCase();
        const colorMatch = colorFilter === 'All' || product.color === colorFilter;
        return categoryMatch && colorMatch;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sortOption) {
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            default:
                return 0;
        }
    });

    const toggleWishlist = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        navigate(`/attire-category/${newFilter}`); // Update URL to reflect selected filter
    };

    return (
        <div className="attire-container">
            <div className="filter-container">
                <h3>Filters</h3>
                <ul>
                    <li className={filter === 'all' ? 'active' : ''} onClick={() => handleFilterChange('all')}>All</li>
                    <li className={filter === 'men' ? 'active' : ''} onClick={() => handleFilterChange('men')}>Men</li>
                    <li className={filter === 'women' ? 'active' : ''} onClick={() => handleFilterChange('women')}>Women</li>
                </ul>
                <select onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
                    <option value="All">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="name-asc">Name: A-Z</option>
                    <option value="name-desc">Name: Z-A</option>
                </select>
                <div className="color-filter">
                    <h4>Color</h4>
                    <ul>
                        {colorOptions.map(option => (
                            <li
                                key={option.label}
                                className={colorFilter === option.label.toLowerCase() ? 'active' : ''}
                                onClick={() => setColorFilter(option.label.toLowerCase())}
                            >
                                <span className="color-circle" style={{ backgroundColor: option.color }}></span>
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="products-container">
                {sortedProducts.map(product => (
                    <div key={product.id} className="product-card" onClick={() => setSelectedProduct(product)}>
                        <div className="wishlist-icon" onClick={(e) => { e.stopPropagation(); toggleWishlist(product); }}>
                            <FaHeart color={isInWishlist(product.id) ? 'red' : 'white'} />
                        </div>
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-overlay">
                            <div className="product-icons">
                                <i className="fas fa-share"></i>
                                <i className="fas fa-shopping-cart" onClick={(e) => { e.stopPropagation(); addToCart(product); }}></i>
                            </div>
                            <p className="product-price"> Rs. {product.price}</p>
                            <button className="rent-button">Rent Now</button>
                        </div>
                        <p className="product-name">{product.name}</p>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <div className="product-details-overlay">
                    <div className="product-details">
                        <button className="close-button" onClick={() => setSelectedProduct(null)}>Close</button>
                        <h3>{selectedProduct.name}</h3>
                        <p>{selectedProduct.description}</p>
                        <p>Price: {selectedProduct.price}</p>
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <div  className='btn-grp'>
                        <button onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
                        <button onClick={() => toggleWishlist(selectedProduct)}>
                            {isInWishlist(selectedProduct.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Attire;
