import React from 'react';
import styles from './HomeInputDesign.module.css';

interface HomeHeaderProps {
  logoSrc: string;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({ logoSrc }) => {
  return (
    <div className={styles.headerRow}>
      <img src={logoSrc} alt="Ward Logo" className={styles.logo} />
      <h1 className={styles.title}>YSA</h1>
    </div>
  );
};

export default HomeHeader;
