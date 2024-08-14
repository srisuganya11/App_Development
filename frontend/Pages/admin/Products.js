import React, { useState } from 'react';
import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/products.css';

const Products = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: 'Vintage Dress', description: 'Rent this elegant vintage dress for any special occasion.', price: '$40.00', stock: 15 },
    { id: 2, name: 'Designer Suit', description: 'Premium designer suit available for rent, perfect for formal events.', price: '$70.00', stock: 10 },
    { id: 3, name: 'Casual Jacket', description: 'Stay stylish and warm with this trendy casual jacket, available for short-term rental.', price: '$25.00', stock: 20 },
    { id: 4, name: 'Formal Blazer', description: 'Elevate your business look with this tailored formal blazer, available for rent. Ideal for interviews, meetings, or any professional occasion.', price: '$40.00', stock: 20 },
    { id: 5, name: 'Cocktail Dress', description: 'Rent this chic cocktail dress for your next evening event. Perfect for parties, this dress combines elegance with comfort', price: '$50.00', stock: 10 },
  ]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '' });

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleEditProduct = (id) => {
    const product = products.find(product => product.id === id);
    setEditingProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      setProducts(products.map(product => 
        product.id === editingProduct.id ? editingProduct : product
      ));
      setEditingProduct(null);
    } else {
      const newProductId = products.length ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { ...newProduct, id: newProductId }]);
      setNewProduct({ name: '', description: '', price: '', stock: '' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className="main-container">
        <div className="main-title">
          <h3>PRODUCTS</h3>
        </div>

        <div className="products-content">
          <table className="products-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.stock}</td>
                  <td>
                    <button className="edit-btn" onClick={() => handleEditProduct(product.id)}>Edit</button>
                    <button className="delete-btn" onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="product-form">
            <h4>{editingProduct ? 'Edit Product' : 'Add Product'}</h4>
            <input 
              type="text" 
              name="name" 
              value={editingProduct ? editingProduct.name : newProduct.name} 
              onChange={handleInputChange} 
              placeholder="Name" 
            />
            <input 
              type="text" 
              name="description" 
              value={editingProduct ? editingProduct.description : newProduct.description} 
              onChange={handleInputChange} 
              placeholder="Description" 
            />
            <input 
              type="text" 
              name="price" 
              value={editingProduct ? editingProduct.price : newProduct.price} 
              onChange={handleInputChange} 
              placeholder="Price" 
            />
            <input 
              type="text" 
              name="stock" 
              value={editingProduct ? editingProduct.stock : newProduct.stock} 
              onChange={handleInputChange} 
              placeholder="Stock" 
            />
            <button className="save-btn" onClick={handleSaveProduct}>
              {editingProduct ? 'Save Changes' : 'Add Product'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;