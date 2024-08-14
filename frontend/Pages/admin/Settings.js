import React, { useState } from 'react';
import Header from '../../Components/UI/Header'; // Updated path
import Sidebar from '../../Components/UI/Sidebar'; // Updated path
import '../../Assets/CSS/Settings.css'; 

const Settings = () => {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle);
    };

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

            <main className='main-container'>
                <div className='main-title'>
                    <h3>SETTINGS</h3>
                </div>

                <div className='settings-content'>
                    <form className="settings-form">
                        <div className="form-group">
                            <label htmlFor="siteName">Site Name:</label>
                            <input type="text" id="siteName" name="siteName" placeholder="Enter site name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="adminEmail">Admin Email:</label>
                            <input type="email" id="adminEmail" name="adminEmail" placeholder="Enter admin email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="currency">Currency:</label>
                            <select id="currency" name="currency">
                                <option value="usd">USD</option>
                                <option value="eur">EUR</option>
                                <option value="gbp">GBP</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="timezone">Timezone:</label>
                            <input type="text" id="timezone" name="timezone" placeholder="Enter timezone" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="save-btn">Save Settings</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Settings;
