import React, { useState } from 'react';
import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/customers.css';

const Customers = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321' },
    { id: 3, name: 'Michael Johnson', email: 'michael@example.com', phone: '456-789-0123' },
    { id: 4, name: 'Emily Davis', email: 'emily@example.com', phone: '321-654-9870' },
    { id: 5, name: 'William Brown', email: 'william@example.com', phone: '654-321-0987' },
  ]);
  const [editingCustomer, setEditingCustomer] = useState(null);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '', phone: '' });

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

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
      setNewCustomer({ name: '', email: '', phone: '' });
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
          <h3>CUSTOMERS</h3>
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
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>
                      <button className="edit-btn" onClick={() => handleEditCustomer(customer.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteCustomer(customer.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

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
            <button className="save-btn" onClick={handleSaveCustomer}>
              {editingCustomer ? 'Save Changes' : 'Add Customer'}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Customers;
