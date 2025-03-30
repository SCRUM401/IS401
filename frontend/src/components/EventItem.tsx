import React from 'react';
import styles from './InputDesign.module.css';

interface EventItemProps {
  date: string;
  title: string;
  time: string;
  location: string;
  description?: string;
  styleClasses: {
    container: string;
    dateContainer: string;
    contentContainer: string;
    titleClass: string;
    locationClass: string;
    detailsClass: string;
  };
  onMoreDetails?: () => void; // 👈 ADD THIS
}

const EventItem: React.FC<EventItemProps> = ({
  date,
  title,
  time,
  location,
  description,
  styleClasses,
  onMoreDetails, // 👈 ADD THIS
}) => {
  return (
    <article className={styleClasses.container}>
      <div className={styleClasses.dateContainer}>{date}</div>
      <div className={styleClasses.contentContainer}>
        <h3 className={styleClasses.titleClass}>
          <span>{title} - </span>
          <span className={styles.span}>{time}</span>
        </h3>
        <p className={styleClasses.locationClass}>{location}</p>
        <a
          onClick={onMoreDetails}
          className={styleClasses.detailsClass}
          style={{ cursor: 'pointer' }}
        >
          More Details...
        </a>
      </div>
    </article>
  );
};

export default EventItem;
