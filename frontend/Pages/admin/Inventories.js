import React, { useState } from 'react';
import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/inventories.css';

const Inventories = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [inventories, setInventories] = useState([
    { id: 1, name: 'Item A', category: 'Category 1', quantity: 100, status: 'In Stock' },
    { id: 2, name: 'Item B', category: 'Category 2', quantity: 50, status: 'Low Stock' },
    { id: 3, name: 'Item C', category: 'Category 3', quantity: 200, status: 'In Stock' },
    { id: 4, name: 'Item D', category: 'Category 1', quantity: 0, status: 'Out of Stock' },
    { id: 5, name: 'Item E', category: 'Category 2', quantity: 120, status: 'In Stock' },
  ]);
  const [editingInventory, setEditingInventory] = useState(null);
  const [newInventory, setNewInventory] = useState({ name: '', category: '', quantity: '', status: '' });
  const [newCategory, setNewCategory] = useState('');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleEditInventory = (id) => {
    const inventory = inventories.find(inv => inv.id === id);
    setEditingInventory(inventory);
  };

  const handleDeleteInventory = (id) => {
    setInventories(inventories.filter(inv => inv.id !== id));
  };

  const handleSaveInventory = () => {
    if (editingInventory) {
      setInventories(inventories.map(inv => 
        inv.id === editingInventory.id ? editingInventory : inv
      ));
      setEditingInventory(null);
    } else {
      const newInventoryId = inventories.length ? inventories[inventories.length - 1].id + 1 : 1;
      setInventories([...inventories, { ...newInventory, id: newInventoryId }]);
      setNewInventory({ name: '', category: '', quantity: '', status: '' });
    }
  };

  const handleAddCategory = () => {
    // Add logic to handle category addition
    // For simplicity, we're just logging the new category
    console.log('New Category:', newCategory);
    setNewCategory('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingInventory) {
      setEditingInventory({ ...editingInventory, [name]: value });
    } else {
      setNewInventory({ ...newInventory, [name]: value });
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>
        <div className='main-title'>
          <h3>INVENTORIES</h3>
        </div>

        <div className='inventories-container'>
          <div className='content'>
            <table className="inventories-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Quantity</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {inventories.map(inventory => (
                  <tr key={inventory.id}>
                    <td>{inventory.id}</td>
                    <td>{inventory.name}</td>
                    <td>{inventory.category}</td>
                    <td>{inventory.quantity}</td>
                    <td>{inventory.status}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEditInventory(inventory.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteInventory(inventory.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="inventory-form">
            <h4>{editingInventory ? 'Edit Inventory Item' : 'Add Inventory Item'}</h4>
            <input 
              type="text" 
              name="name" 
              value={editingInventory ? editingInventory.name : newInventory.name} 
              onChange={handleInputChange} 
              placeholder="Name" 
            />
            <input 
              type="text" 
              name="category" 
              value={editingInventory ? editingInventory.category : newInventory.category} 
              onChange={handleInputChange} 
              placeholder="Category" 
            />
            <input 
              type="number" 
              name="quantity" 
              value={editingInventory ? editingInventory.quantity : newInventory.quantity} 
              onChange={handleInputChange} 
              placeholder="Quantity" 
            />
            <input 
              type="text" 
              name="status" 
              value={editingInventory ? editingInventory.status : newInventory.status} 
              onChange={handleInputChange} 
              placeholder="Status" 
            />
            <button className="save-btn" onClick={handleSaveInventory}>
              {editingInventory ? 'Save Changes' : 'Add Inventory Item'}
            </button>
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Inventories;
