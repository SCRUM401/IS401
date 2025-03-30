import React from 'react';
import styles from './HomeInputDesign.module.css';

interface EventItemProps {
  date: string;
  title: string;
  time: string;
  location: string;
  styleClasses: {
    container: string;
    dateContainer: string;
    contentContainer: string;
    titleClass: string;
    locationClass: string;
    detailsClass: string;
  };
}

const HomeEventItem: React.FC<EventItemProps> = ({
  date,
  title,
  time,
  location,
  styleClasses,
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
        <a href="#" className={styleClasses.detailsClass}>
          More Details...
        </a>
      </div>
    </article>
  );
};

export default HomeEventItem;
