import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsBoxArrowRight // Import logout icon
} from 'react-icons/bs';
import '../../Assets/CSS/sidebar.css';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const navigate = useNavigate(); // Use navigate for programmatic navigation

  const handleLogout = () => {
    // Implement logout logic here (e.g., clear user session, tokens, etc.)
    // After logout, navigate to the login page
    navigate('/');
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon_header" /> FASHION FLARE
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>X</span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <BsGrid1X2Fill className="icon" /> <Link to="/admin">Dashboard</Link>
        </li>
        <li className="sidebar-list-item">
          <BsFillArchiveFill className="icon" /><Link to="/admin-products">Products</Link>
        </li>
        <li className="sidebar-list-item">
          <BsFillGrid3X3GapFill className="icon" /><Link to="/categories"> Categories</Link>
        </li>
        <li className="sidebar-list-item">
          <BsPeopleFill className="icon" /> <Link to="/admin-customers">Customers</Link>
        </li>
        <li className="sidebar-list-item">
          <BsListCheck className="icon" /> <Link to="/admin-inventories">Inventory</Link>
        </li>
        <li className="sidebar-list-item">
          <BsMenuButtonWideFill className="icon" /><Link to="/admin-reports"> Reports</Link>
        </li>
        <li className="sidebar-list-item">
          <BsFillGearFill className="icon" /><Link to="/admin-settings"> Setting</Link>
        </li>
        <li className="sidebar-list-item logout">
          <BsBoxArrowRight className="icon" /> <span onClick={handleLogout}>Logout</span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;