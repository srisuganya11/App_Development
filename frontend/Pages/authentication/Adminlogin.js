import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Assets/CSS/AdminLogin.css';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check hardcoded admin credentials
        if (username === 'ss@gmail.com' && password === 'ss') {
            localStorage.setItem('admin', JSON.stringify({ username, password }));
            navigate('/admin'); // Redirect to admin dashboard
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="admin-login-container">
            <div className="admin-login-content">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Admin Login</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
