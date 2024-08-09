// src/components/Sidebar.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <div className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        {!isCollapsed && <h2 className={styles.logo}>Notes App</h2>}
        <button className={styles.toggleButton} onClick={onToggle}>
          {isCollapsed ? '☰' : '✕'}
        </button>
      </div>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link href="/">
            {isCollapsed ? '🏠' : 'Home'}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/create">
            {isCollapsed ? '📝' : 'Create Note'}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/personal">
            {isCollapsed ? '📚' : 'Personal'}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/work">
            {isCollapsed ? '💼' : 'Work'}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
            {isCollapsed ? '📁' : 'Projects'}
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/folders">
            {isCollapsed ? '📂' : 'Folders'}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
