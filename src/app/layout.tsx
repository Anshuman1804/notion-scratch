// src/app/layout.tsx
'use client';
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import './globals.css';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev);
  };

  return (
    <html lang="en">
      <body>
        <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
        <div className={`main-container ${isSidebarCollapsed ? 'shifted' : ''}`}>
          <Navbar isSidebarCollapsed={isSidebarCollapsed} />
          <main className="main-content">
            {children}
          </main>
        </div>
      </body>
    </html> 
  );
};

export default Layout;
