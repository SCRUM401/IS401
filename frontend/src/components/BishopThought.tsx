import React from 'react';
import styles from './InputDesign.module.css';

interface BishopThoughtProps {
  quoteLeftSrc: string;
  quoteRightSrc: string;
  message: string;
}

const BishopThought: React.FC<BishopThoughtProps> = ({
  quoteLeftSrc,
  quoteRightSrc,
  message,
}) => {
  return (
    <section className={styles.div36}>
      <h2 className={styles.div37}>Bishop's Thought</h2>
      <img src={quoteLeftSrc} alt="Quote symbol" className={styles.quoteLeft} />
      <blockquote className={styles.div38}>{message}</blockquote>
      <img
        src={quoteRightSrc}
        alt="Quote symbol"
        className={styles.quoteRight}
      />
    </section>
  );
};

export default BishopThought;
