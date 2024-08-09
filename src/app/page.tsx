// src/app/page.tsx
import React from 'react';
import styles from './page.module.css'; // Import styles

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to the Notes App</h1>
      <p className={styles.subtitle}>Your personal note-taking companion</p>
      <section className={styles.features}>
        <div className={styles.featureCard}>
          <h2>Organize Your Thoughts</h2>
          <p>Keep all your ideas and notes in one place with easy-to-use features.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Stay on Track</h2>
          <p>Set reminders and keep track of your tasks to stay productive.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>Access Anywhere</h2>
          <p>Access your notes from any device, anytime, anywhere.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
