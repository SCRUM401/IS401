'use client';

import React from 'react';
import styles from './InputDesign.module.css';

interface EventItemProps {
  date: string;
  title: string;
  location: string;
  showActions?: boolean;
  onApprove?: () => void;
  onDeny?: () => void;
}

const EventItem: React.FC<EventItemProps> = ({
  date,
  title,
  location,
  showActions = false,
  onApprove,
  onDeny,
}) => {
  return (
    <article className={styles.eventItem}>
      <div className={styles.eventDate} aria-label={`Event date: ${date}`}>
        {date}
      </div>
      <div className={styles.eventContent}>
        <h3 className={styles.eventTitle}>{title}</h3>
        <p className={styles.eventLocation}>{location}</p>
        <button className={styles.eventDetails} aria-label="View more details">
          More Details...
        </button>
      </div>
      {showActions && (
        <div className={styles.actionButtons}>
          <button
            className={styles.approveButton}
            onClick={onApprove}
            aria-label="Approve event"
          >
            Approve
          </button>
          <button
            className={styles.denyButton}
            onClick={onDeny}
            aria-label="Deny event"
          >
            Deny
          </button>
        </div>
      )}
    </article>
  );
};

export default EventItem;
