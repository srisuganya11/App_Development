import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CartProvider from './Components/UI/CartContext'; 
import WishProvider from './Components/UI/WishContext'; 
import { SwappingProvider } from './Components/UI/SwappingContext'; 
import Login from './Pages/authentication/Login';
import Signup from './Pages/authentication/Signup';
import AdminLogin from './Pages/authentication/Adminlogin';
import Home from './Pages/user/Home';
import About from './Pages/user/About';
import Attire from './Pages/user/Attire';
import SwappingPage from './Pages/user/Swapping'; 
import Cart from './Pages/user/Cart'; 
import Wishlist from './Pages/user/Wishlist'; 
import Checkout from './Pages/user/Checkout'; 
import Contact from './Pages/user/Contact';
import Admin from './Pages/admin/Admin'; // Renamed import
import Admincust from './Pages/admin/Customers';
import Categories from './Pages/admin/Categories';
import Admininvent from './Pages/admin/Inventories';
import Adminpro from './Pages/admin/Products';
import Adminrep from './Pages/admin/Reports';
import Adminset from './Pages/admin/Settings';
import Navbar from './Components/UI/Navbar';
import Footer from './Components/UI/Footer';
import Sidebar from './Components/UI/Sidebar'; // Corrected import
import Header from './Components/UI/Header'; // Corrected import

const App = () => {
    return (
        <CartProvider>
            <WishProvider>
                <SwappingProvider>
                    <Router>
                        <Routes>
                            {/* Routes for Admin Pages */}
                            <Route path="/admin-login" element={<AdminLogin />} />
                            <Route path="/admin" element={<Admin />} />
                            <Route path="/admin-customers" element={<Admincust />} />
                            <Route path="/categories" element={<Categories />} />
                            <Route path="/admin-inventories" element={<Admininvent />} />
                            <Route path="/admin-products" element={<Adminpro />} />
                            <Route path="/admin-reports" element={<Adminrep />} />
                            <Route path="/admin-settings" element={<Adminset />} />
                            
                            {/* Routes for User Pages */}
                            <Route path="/home" element={<><Navbar /><Home /><Footer /></>} />
                            <Route path="/" element={<><Navbar /><Login /></>} />
                            <Route path="/signup" element={<><Navbar /><Signup /><Footer /></>} />
                            <Route path="/attire" element={<><Navbar /><Attire /><Footer /></>} />
                            <Route path="/attire-category/:category" element={<><Navbar /><Attire /><Footer /></>} />
                            <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
                            <Route path="/swapping" element={<><Navbar /><SwappingPage /><Footer /></>} />
                            <Route path="/cart" element={<><Navbar /><Cart /><Footer /></>} />
                            <Route path="/wishlist" element={<><Navbar /><Wishlist /><Footer /></>} />
                            <Route path="/checkout" element={<><Navbar /><Checkout /><Footer /></>} />
                            <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
                        </Routes>
                    </Router>
                </SwappingProvider>
            </WishProvider>
        </CartProvider>
    );
};

export default App;
