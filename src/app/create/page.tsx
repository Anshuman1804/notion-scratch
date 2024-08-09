'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // Import styles

const CreateNotePage: React.FC = () => {
  const [newNote, setNewNote] = useState('');
  const router = useRouter();

  // Function to handle adding a new note
  const addNote = () => {
    if (newNote.trim()) {
      // For demonstration, redirect to home page after adding a note
      // In a real app, you might handle note addition here
      router.push('/home');
    }
  };

  // Function to handle canceling note creation
  const cancelNote = () => {
    router.push('/'); // Redirect to the landing page or another appropriate page
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={cancelNote} className={styles.closeButton}>×</button>
        <h1 className={styles.title}>Create Your Note</h1>
        <textarea
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Write your note here..."
          className={styles.textarea}
        />
        <div className={styles.buttonContainer}>
          <button onClick={addNote} className={styles.addButton}>Add Note</button>
          <button onClick={cancelNote} className={styles.cancelButton}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNotePage;
