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
