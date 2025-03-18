import React from 'react';
import styles from './InputDesign.module.css';
import EventItem from './EventItem';

interface Event {
  id: string;
  date: string;
  title: string;
  location: string;
}

interface EventSectionProps {
  title: string;
  events: Event[];
  showActions?: boolean;
  onApprove?: (id: string) => void;
  onDeny?: (id: string) => void;
}

const EventSection: React.FC<EventSectionProps> = ({
  title,
  events,
  showActions = false,
  onApprove,
  onDeny,
}) => {
  return (
    <section>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.eventList}>
        {events.map((event) => (
          <EventItem
            key={event.id}
            date={event.date}
            title={event.title}
            location={event.location}
            showActions={showActions}
            onApprove={onApprove ? () => onApprove(event.id) : undefined}
            onDeny={onDeny ? () => onDeny(event.id) : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default EventSection;
