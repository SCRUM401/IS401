import React from 'react';
import styles from './InputDesign.module.css';
import EventItem from './HomeEventItem';

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
  styleClasses: {
    sectionHeader: string;
    sectionTitle: string;
    dateRange?: string;
    divider: string;
    eventContainer: string;
    dateContainer: string;
    contentContainer: string;
    titleClass: string;
    locationClass: string;
    detailsClass: string;
  };
}

const HomeEventSection: React.FC<EventSectionProps> = ({
  title,
  dateRange,
  events,
  styleClasses,
}) => {
  return (
    <section>
      <div className={styleClasses.sectionHeader}>
        <h2 className={styleClasses.sectionTitle}>{title}</h2>
        {dateRange && <p className={styleClasses.dateRange}>{dateRange}</p>}
        <div className={styleClasses.divider} />
      </div>

      {events.map((event, index) => (
        <EventItem
          key={index}
          date={event.date}
          title={event.title}
          time={event.time}
          location={event.location}
          styleClasses={{
            container: styleClasses.eventContainer,
            dateContainer: styleClasses.dateContainer,
            contentContainer: styleClasses.contentContainer,
            titleClass: styleClasses.titleClass,
            locationClass: styleClasses.locationClass,
            detailsClass: styleClasses.detailsClass,
          }}
        />
      ))}
    </section>
  );
};

export default HomeEventSection;
