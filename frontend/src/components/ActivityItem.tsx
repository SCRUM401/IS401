'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface ActivityItemProps {
  activityName: string;
  isActive?: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  activityName,
  isActive = false,
}) => {
  // Determine which styles to use based on whether the item is active
  const containerStyle = styles.div5;
  const labelStyle = styles.div6;
  const inputStyle = isActive ? styles.div7 : styles.div11;
  const actionContainerStyle = styles.div8;

  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={`activity-${activityName}`}>
        Activity Name
      </label>
      <input
        type="text"
        id={`activity-${activityName}`}
        className={inputStyle}
        value={activityName}
        readOnly
        placeholder="Activity Name"
      />
      <div className={actionContainerStyle}>
        <div aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="star-icon"
            style={{ marginRight: '10px' }}
          >
            <path
              d="M8.85 17.825L12 15.925L15.15 17.85L14.325 14.25L17.1 11.85L13.45 11.525L12 8.125L10.55 11.5L6.9 11.825L9.675 14.25L8.85 17.825ZM5.825 22L7.45 14.975L2 10.25L9.2 9.625L12 3L14.8 9.625L22 10.25L16.55 14.975L18.175 22L12 18.275L5.825 22Z"
              fill="#1D1B20"
            />
          </svg>
        </div>
        <button className={styles.button}>RSVP</button>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ActivityItem;
