'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import EventItem from './EventItem';

interface Event {
  date: string;
  title: string;
  time: string;
  location: string;
}

interface EventSectionProps {
  title: string;
  dateRange?: string;
  events: Event[];
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  dateRange,
  events,
}) => {
  return (
    <section className={styles.eventsContainer}>
      <header className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{title}</h2>
        {dateRange && <p className={styles.dateRange}>{dateRange}</p>}
        <div className={styles.divider} role="separator" />
      </header>
      {events.map((event, index) => (
        <EventItem
          key={index}
          date={event.date}
          title={event.title}
          time={event.time}
          location={event.location}
        />
      ))}
    </section>
  );
};

export default EventSection;
