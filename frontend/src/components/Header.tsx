import React from 'react';
import styles from './InputDesign.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <div>
        <svg
          width="31"
          height="28"
          viewBox="0 0 31 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.filterIcon}
          aria-hidden="true"
        >
          <path
            d="M28.4166 3.5H2.58325L12.9166 14.5367V22.1667L18.0833 24.5V14.5367L28.4166 3.5Z"
            stroke="#6947A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default Header;
