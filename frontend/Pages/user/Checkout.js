import React, { useState } from 'react';
import Layout from '../../Pages/user/Layout';

const paymentContainerStyle = {
    padding: '20px',
};

const paymentFormStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '400px',
    margin: 'auto',
};

const inputStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ddd',
};

const submitButtonStyle = {
    padding: '10px',
    backgroundColor: '#433a40',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
};

const Checkout = () => {
    const [paymentData, setPaymentData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
    });

    const handleChange = (e) => {
        setPaymentData({
            ...paymentData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/api/payment/submit2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(paymentData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('Payment submitted successfully!');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Error submitting payment.');
            });
    };

    return (
        <Layout>
            <div style={paymentContainerStyle}>
                <h2>Payment</h2>
                <form style={paymentFormStyle} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="cardNumber"
                        placeholder="Card Number"
                        style={inputStyle}
                        value={paymentData.cardNumber}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="cardName"
                        placeholder="Card Holder Name"
                        style={inputStyle}
                        value={paymentData.cardName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="expiryDate"
                        placeholder="Expiration Date (MM/YY)"
                        style={inputStyle}
                        value={paymentData.expiryDate}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        style={inputStyle}
                        value={paymentData.cvv}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" style={submitButtonStyle}>Submit Payment</button>
                </form>
            </div>
        </Layout>
    );
};

export default Checkout;
