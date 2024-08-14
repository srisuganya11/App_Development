import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { CartContext } from '../../Components/UI/CartContext';
import '../../Assets/CSS/Cart.css';
import { FaTrashAlt } from 'react-icons/fa'; // Import the trash icon

const Cart = () => {
    const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const navigate = useNavigate(); // Initialize useNavigate

    const calculateTotalCost = () => {
        const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        return total;
    };

    const shippingCharge = 50;
    const totalCost = calculateTotalCost();
    const grandTotal = totalCost + shippingCharge;

    const handleRentNow = () => {
        navigate('/checkout'); // Navigate to Checkout page
    };

    return (
        <div className="cart-container">
            <h1 className="page-heading">Your Cart</h1>
            <div className="cart-content">
                <div className="cart-items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>Price: Rs. {item.price}</p>
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                    </div>
                                    <div className="cart-buttons">
                                        <FaTrashAlt 
                                            onClick={() => removeFromCart(item.id)} 
                                            className="remove-icon"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="order-summary">
                    <h2>Order Summary</h2>
                    <p>Total Cost: Rs. {totalCost}</p>
                    <p>Shipping Charge: Rs. {shippingCharge}</p>
                    <p><strong>Grand Total: Rs. {grandTotal}</strong></p>
                    <button className="rent-now-button" onClick={handleRentNow}>Rent Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
