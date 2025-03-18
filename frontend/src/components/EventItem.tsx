'use client';
import React from 'react';
import styles from './InputDesign.module.css';

interface EventItemProps {
  date: string;
  title: string;
  time: string;
  location: string;
}

const EventItem: React.FC<EventItemProps> = ({
  date,
  title,
  time,
  location,
}) => {
  return (
    <article className={styles.eventItem}>
      <div className={styles.eventDate} aria-label={`Event date: ${date}`}>
        {date}
      </div>
      <div className={styles.eventDetails}>
        <h3 className={styles.eventTitle}>
          <span>{title}-</span>
          <span className={styles.regularText}>{time}</span>
        </h3>
        <p className={styles.eventLocation}>{location}</p>
        <button
          className={styles.eventLink}
          aria-label={`More details about ${title}`}
        >
          More Details...
        </button>
      </div>
    </article>
  );
};

export default EventItem;
