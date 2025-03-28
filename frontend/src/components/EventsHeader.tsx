import React from 'react';
import styles from './EventList.module.css';

const EventsHeader: React.FC = () => {
  return (
    <header className={styles.div2}>
      <div aria-hidden="true">
        <svg
          width="31"
          height="28"
          viewBox="0 0 31 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="filter-icon"
        >
          <path
            d="M28.4167 3.5H2.58337L12.9167 14.5367V22.1667L18.0834 24.5V14.5367L28.4167 3.5Z"
            stroke="#6947A3"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h1 className={styles.div3}>Events</h1>
    </header>
  );
};

export default EventsHeader;
