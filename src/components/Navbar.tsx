// src/components/Navbar.tsx
'use client';
import React from 'react';
import styles from './Navbar.module.css'; // Ensure you have this CSS file

interface NavbarProps {
  isSidebarCollapsed: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isSidebarCollapsed }) => {
  return (
    <div className={`${styles.navbar} ${isSidebarCollapsed ? styles.shifted : ''}`}>
      <h1 className={styles.title}>Notes App</h1>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.actions}>
        <button className={styles.actionButton}>Sign In</button>
        <button className={styles.actionButton}>Settings</button>
      </div>
    </div>
  );
};

export default Navbar;
