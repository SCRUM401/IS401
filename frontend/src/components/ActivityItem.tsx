'use client';
import React from 'react';
import styles from '../CSS/EventList.module.css';

interface Event {
  EventID: number;
  EventName: string;
  Month: number;
  Day: number;
  Year: number;
}

interface ActivityItemProps {
  event: Event;
  handleRSVP: (eventId: number) => void;
  handleCancel: (eventId: number) => void;
  rsvped: boolean;
}

const ActivityItem: React.FC<ActivityItemProps> = ({
  event,
  handleRSVP,
  handleCancel,
  rsvped,
}) => {
  return (
    <div key={event.EventID} className={styles.div5}>
      <label className={styles.div6} htmlFor={`activity-${event.EventID}`}>
        Activity Name
      </label>
      <input
        type="text"
        id={`activity-${event.EventID}`}
        className={styles.div7}
        value={event.EventName}
        readOnly
      />
      <div className={styles.div8}>
        {rsvped ? (
          // Show cancel button for RSVP'd events
          <button
            className={styles.button}
            onClick={() => handleCancel(event.EventID)}
          >
            Cancel
          </button>
        ) : (
          // Show RSVP button for events that are not RSVP'd yet
          <button
            className={`${styles.button} ${rsvped ? styles.disabledButton : ''}`}
            onClick={() => handleRSVP(event.EventID)}
            disabled={rsvped}
          >
            RSVP
          </button>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
