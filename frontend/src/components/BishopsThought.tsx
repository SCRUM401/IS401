'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface BishopsThoughtProps {
  message: string;
}

const BishopsThought: React.FC<BishopsThoughtProps> = ({ message }) => {
  return (
    <section className={styles.bishopsContainer}>
      <h2 className={styles.bishopsTitle}>Bishop's Thought</h2>
      <blockquote className={styles.bishopsMessage}>{message}</blockquote>
    </section>
  );
};

export default BishopsThought;
