import React, { useState } from 'react';
import Sidebar from '../../Components/UI/Sidebar';
import Header from '../../Components/UI/Header';
import '../../Assets/CSS/reports.css';

const Reports = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [reports, setReports] = useState([
    { id: 1, title: 'Monthly Sales', date: '2024-07-01', status: 'Completed' },
    { id: 2, title: 'Inventory Summary', date: '2024-07-15', status: 'In Progress' },
    { id: 3, title: 'Customer Feedback', date: '2024-07-20', status: 'Pending' },
    { id: 4, title: 'Quarterly Performance', date: '2024-07-25', status: 'Completed' },
    { id: 5, title: 'Yearly Financials', date: '2024-07-30', status: 'In Progress' },
  ]);
  const [editingReport, setEditingReport] = useState(null);
  const [newReport, setNewReport] = useState({ title: '', date: '', status: '' });
  const [newCategory, setNewCategory] = useState('');

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleEditReport = (id) => {
    const report = reports.find(rep => rep.id === id);
    setEditingReport(report);
  };

  const handleDeleteReport = (id) => {
    setReports(reports.filter(rep => rep.id !== id));
  };

  const handleSaveReport = () => {
    if (editingReport) {
      setReports(reports.map(rep => 
        rep.id === editingReport.id ? editingReport : rep
      ));
      setEditingReport(null);
    } else {
      const newReportId = reports.length ? reports[reports.length - 1].id + 1 : 1;
      setReports([...reports, { ...newReport, id: newReportId }]);
      setNewReport({ title: '', date: '', status: '' });
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
    if (editingReport) {
      setEditingReport({ ...editingReport, [name]: value });
    } else {
      setNewReport({ ...newReport, [name]: value });
    }
  };

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className="main-container">
        <div className="main-title">
          <h3>REPORTS</h3>
        </div>

        <div className="reports-container">
          <div className="content">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map(report => (
                  <tr key={report.id}>
                    <td>{report.id}</td>
                    <td>{report.title}</td>
                    <td>{report.date}</td>
                    <td>{report.status}</td>
                    <td>
                      
                      <button className="edit-btn" onClick={() => handleEditReport(report.id)}>Edit</button>
                      <button className="delete-btn" onClick={() => handleDeleteReport(report.id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="report-form">
            <h4>{editingReport ? 'Edit Report' : 'Add Report'}</h4>
            <input 
              type="text" 
              name="title" 
              value={editingReport ? editingReport.title : newReport.title} 
              onChange={handleInputChange} 
              placeholder="Title" 
            />
            <input 
              type="date" 
              name="date" 
              value={editingReport ? editingReport.date : newReport.date} 
              onChange={handleInputChange} 
              placeholder="Date" 
            />
            <input 
              type="text" 
              name="status" 
              value={editingReport ? editingReport.status : newReport.status} 
              onChange={handleInputChange} 
              placeholder="Status" 
            />
            <button className="save-btn" onClick={handleSaveReport}>
              {editingReport ? 'Save Changes' : 'Add Report'}
            </button>
          </div>

          
        </div>
      </main>
    </div>
  );
};

export default Reports;
