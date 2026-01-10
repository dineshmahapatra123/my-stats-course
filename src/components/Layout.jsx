import React from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    const location = useLocation();
    // We can add logic here to hide sidebar on login pages if we had them.

    return (
        <div className="layout-wrapper">
            <Sidebar />
            <main className="main-content">
                <div className="min-h-screen">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
