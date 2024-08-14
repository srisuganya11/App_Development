import React, { useState } from 'react';
import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/Categories.css';

const Categories = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sortOption, setSortOption] = useState('All');
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', category: 'Regular' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', category: 'Premium' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', phone: '456-789-0123', category: 'Regular' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '321-654-9870', category: 'Premium' },
    { id: 5, name: 'William Brown', email: 'william@example.com', phone: '654-321-0987', category: 'Regular' },
  ]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '', category: 'Regular' });

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const filteredCustomers = customers.filter(customer => {
    return filter === 'all' || customer.category.toLowerCase() === filter.toLowerCase();
  });

  const sortedCustomers = filteredCustomers.sort((a, b) => {
    switch (sortOption) {
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  const handleEditCustomer = (id) => {
    const customer = customers.find(customer => customer.id === id);
    setEditingCustomer(customer);
  };

  const handleDeleteCustomer = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const handleSaveCustomer = () => {
    if (editingCustomer) {
      setCustomers(customers.map(customer => 
        customer.id === editingCustomer.id ? editingCustomer : customer
      ));
      setEditingCustomer(null);
    } else {
      const newCustomerId = customers.length ? customers[customers.length - 1].id + 1 : 1;
      setCustomers([...customers, { ...newCustomer, id: newCustomerId }]);
      setNewCustomer({ name: '', email: '', phone: '', category: 'Regular' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingCustomer) {
      setEditingCustomer({ ...editingCustomer, [name]: value });
    } else {
      setNewCustomer({ ...newCustomer, [name]: value });
    }
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>
        <div className='main-title'>
          <h3>CATEGORIES</h3>
        </div>

        <div className='filters-container'>
          <h4>Filters</h4>
          <ul>
            <li className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</li>
            <li className={filter === 'regular' ? 'active' : ''} onClick={() => setFilter('regular')}>Regular</li>
            <li className={filter === 'premium' ? 'active' : ''} onClick={() => setFilter('premium')}>Premium</li>
          </ul>
          <select onChange={(e) => setSortOption(e.target.value)} className="sort-dropdown">
            <option value="All">Sort by</option>
            <option value="name-asc">Name: A-Z</option>
            <option value="name-desc">Name: Z-A</option>
          </select>
        </div>

        <div className='customers-container'>
          <div className='content'>
            <table className="customers-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Category</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {sortedCustomers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.category}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEditCustomer(customer.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="customer-form">
              <h4>{editingCustomer ? 'Edit Customer' : 'Add Customer'}</h4>
              <input 
                type="text" 
                name="name" 
                value={editingCustomer ? editingCustomer.name : newCustomer.name} 
                onChange={handleInputChange} 
                placeholder="Name" 
              />
              <input 
                type="email" 
                name="email" 
                value={editingCustomer ? editingCustomer.email : newCustomer.email} 
                onChange={handleInputChange} 
                placeholder="Email" 
              />
              <input 
                type="text" 
                name="phone" 
                value={editingCustomer ? editingCustomer.phone : newCustomer.phone} 
                onChange={handleInputChange} 
                placeholder="Phone" 
              />
              <select 
                name="category" 
                value={editingCustomer ? editingCustomer.category : newCustomer.category} 
                onChange={handleInputChange}
              >
                <option value="Regular">Regular</option>
                <option value="Premium">Premium</option>
              </select>
              <button className="save-btn" onClick={handleSaveCustomer}>
                {editingCustomer ? 'Save Changes' : 'Add Customer'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Categories;
