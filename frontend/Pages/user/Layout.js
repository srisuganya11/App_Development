    // Layout.js
    import React from 'react';

    const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    };

    const mainStyle = {
    flex: '1',
    };

    const Layout = ({ children }) => {
    return (
        <div style={layoutStyle}>
        
        <main style={mainStyle}>
            {children} {/* Render child components */}
        </main>
        
        </div>
    );
    };

    export default Layout;
