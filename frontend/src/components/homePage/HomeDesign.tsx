'use client';
import React, { useEffect, useState } from 'react';
import styles from './HomeInputDesign.module.css';

import HomeHeader from './HomeHeader';
import HomeEventSection from './HomeEventSection';
import BishopThought from './BishopThought';

function HomeDesign() {
  const [upcomingEvents, setUpcomingEvents] = useState<any[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('https://localhost:5000/api/Church/Events');
        const data = await response.json();

        const formatted = data.map((event: any) => ({
          date: formatDate(event.beginTime),
          title: event.eventName,
          time: formatTime(event.beginTime),
          location: event.address,
        }));

        setUpcomingEvents(formatted);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }); // e.g. Mar 30
  };

  const formatTime = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    }); // e.g. 5:00 PM
  };

  const styleClasses = {
    sectionHeader: styles.pageTitle,
    sectionTitle: styles.pageTitle,
    dateRange: '',
    divider: styles.divider || '',
    eventContainer: styles.formGroup,
    dateContainer: styles.fieldLabel,
    contentContainer: styles.formGroup,
    titleClass: styles.fieldLabel,
    locationClass: styles.fieldLabel,
    detailsClass: styles.submitButton,
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <HomeHeader logoSrc="/logo.png" />
        <h2 className={styles.pageTitle}>Upcoming Events</h2> 
            <div className={styles.eventsScrollArea}>
              <HomeEventSection
                title="" 
                events={upcomingEvents}
                styleClasses={styleClasses}
              />
            </div>
        <BishopThought
          message="As we gather and lift each other, the Spirit will always be present. – Bishop"
          quoteLeftSrc={''}
          quoteRightSrc={''}
        />
      </main>
    </div>
  );
}

export default HomeDesign;
