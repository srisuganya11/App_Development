import React, { useContext } from 'react';
import { WishContext } from '../../Components/UI/WishContext';
import '../../Assets/CSS/Wishlist.css';
import { FaTrash } from 'react-icons/fa'; // Importing trash icon from react-icons

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useContext(WishContext);

    return (
        <div className="wishlist-container">
            <h1 className="page-heading">Wishlist</h1>
            <div className="wishlist-content">
                {wishlist.length === 0 ? (
                    <p>Your wishlist is empty</p>
                ) : (
                    wishlist.map(item => (
                        <div key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.name} className="wishlist-item-image" />
                            <div className="wishlist-item-details">
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>
                                <p>From Rs. {item.price}</p>
                                <FaTrash className="remove-icon" onClick={() => removeFromWishlist(item.id)} />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Wishlist;
