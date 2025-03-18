'use client';

import React, { useState } from 'react';
import styles from './InputDesign.module.css';
import Header from './Header';
import EventSection from './EventSection';
import BottomNavigation from './BottomNavigation';

// Mock data for events
const approvedEvents = [
  { id: '1', date: '4/7', title: 'FHE', location: 'Church Building' },
  {
    id: '2',
    date: '5/3',
    title: "School's Out BBQ",
    location: 'Joaquin Park- 378 N 400 E',
  },
  { id: '3', date: '4/7', title: 'FHE', location: 'Church Building' },
  { id: '4', date: '4/7', title: 'FHE', location: 'Church Building' },
];

const initialRequestedEvents = [
  { id: '5', date: '4/7', title: 'FHE- 7:00 PM', location: 'Church Building' },
  {
    id: '6',
    date: '5/3',
    title: "School's Out BBQ- 1:00PM",
    location: '378 N 400 E',
  },
  { id: '7', date: '4/7', title: 'FHE- 7:00 PM', location: 'Church Building' },
  { id: '8', date: '4/7', title: 'FHE- 7:00 PM', location: 'Church Building' },
  { id: '9', date: '4/7', title: 'FHE- 7:00 PM', location: 'Church Building' },
  { id: '10', date: '4/7', title: 'FHE- 7:00 PM', location: 'Church Building' },
];

const InputDesign: React.FC = () => {
  const [requestedEvents, setRequestedEvents] = useState(
    initialRequestedEvents
  );
  const [approvedEventsList, setApprovedEventsList] = useState(approvedEvents);

  const handleApprove = (id: string) => {
    const eventToApprove = requestedEvents.find((event) => event.id === id);
    if (eventToApprove) {
      setRequestedEvents(requestedEvents.filter((event) => event.id !== id));
      setApprovedEventsList([...approvedEventsList, eventToApprove]);
    }
  };

  const handleDeny = (id: string) => {
    setRequestedEvents(requestedEvents.filter((event) => event.id !== id));
  };

  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <main className={styles.div}>
          <Header title="Admin - Events" />

          <EventSection title="APPROVED EVENTS" events={approvedEventsList} />

          <EventSection
            title="REQUESTED EVENTS"
            events={requestedEvents}
            showActions={true}
            onApprove={handleApprove}
            onDeny={handleDeny}
          />

          <BottomNavigation />
        </main>
      </div>
    </>
  );
};

export default InputDesign;
