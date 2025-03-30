'use client';
import React, { useEffect, useState } from 'react';
import styles from './HomeInputDesign.module.css';

import HomeHeader from './HomeHeader';
import BishopThought from './BishopThought';
import EventItem from '../EventItem';
import ActivityItem from '../ActivityItem';

import churchLogo from '../../assets/purple-church-logo.jpg';
import ysaImage from '../../assets/YSApeople.png';
import quoteIcon from '../../assets/purple-quotes.png';

interface EventData {
  date: string;
  title: string;
  time: string;
  location: string;
  description?: string;
  eventID?: number;
}

function HomeDesign() {
  const [weeklyEvents, setWeeklyEvents] = useState<EventData[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<EventData | null>(null);

  const [allEvents, setAllEvents] = useState<any[]>([]);
  const [rsvpedEvents, setRsvpedEvents] = useState<any[]>([]);

  const styleClasses = {
    container: styles.formGroup,
    dateContainer: styles.fieldLabel,
    contentContainer: styles.formGroup,
    titleClass: styles.fieldLabel,
    locationClass: styles.fieldLabel,
    detailsClass: styles.submitButton,
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          'https://localhost:5000/api/Church/Events'
        );
        const data = await response.json();

        const thisWeek = getThisWeekDateRange();

        const filtered = data.filter((event: any) => {
          const eventDate = new Date(event.year, event.month - 1, event.day);
          return eventDate >= thisWeek.start && eventDate <= thisWeek.end;
        });

        const formatted = filtered.map((event: any) => ({
          date: formatDate(event.month, event.day),
          title: event.eventName,
          time: event.beginTime ? formatTime(event.beginTime) : 'TBD',
          location: event.address
            ? `${event.address}, ${event.city}, ${event.state}`
            : 'TBD',
          description: event.description || '',
          eventID: event.eventID,
        }));

        setWeeklyEvents(formatted);
        setAllEvents(data);
      } catch (error) {
        console.error('Failed to load events:', error);
        setWeeklyEvents([]);
      }
    };

    fetchEvents();
  }, []);

  const getThisWeekDateRange = () => {
    const start = new Date(2025, 3, 13); // April 13
    const end = new Date(2025, 3, 19); // April 19
    return { start, end };
  };

  const formatDate = (month: number, day: number) => {
    const date = new Date(2000, month - 1, day);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatTime = (isoString: string): string => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const handleRSVP = (eventId: number) => {
    const event = allEvents.find((e) => e.eventID === eventId);
    if (!event) return;

    setAllEvents((prev) => prev.filter((e) => e.eventID !== eventId));
    setRsvpedEvents((prev) => [...prev, event]);

    fetch(`http://localhost:4000/api/church/rsvp/${eventId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rsvped: true }),
    });
  };

  const handleCancel = (eventId: number) => {
    const event = rsvpedEvents.find((e) => e.eventID === eventId);
    if (!event) return;

    setRsvpedEvents((prev) => prev.filter((e) => e.eventID !== eventId));
    setAllEvents((prev) => [...prev, event]);

    fetch(`http://localhost:4000/api/church/cancelRsvp/${eventId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rsvped: false }),
    });
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        {/* ✅ Logo and YSA title */}
        <HomeHeader logoSrc={churchLogo} />

        {/* ✅ Banner image */}
        <img
          src={ysaImage}
          alt="YSA group smiling"
          className={styles.bannerImage}
        />

        {/* ✅ Weekly Events */}
        <h2 className={styles.pageTitle}>Upcoming This Week</h2>

        {weeklyEvents.length > 0 ? (
          weeklyEvents.map((event, index) => (
            <EventItem
              key={index}
              {...event}
              styleClasses={styleClasses}
              onMoreDetails={() => setSelectedEvent(event)}
            />
          ))
        ) : (
          <p>No events this week.</p>
        )}

        <br />
        <br />
        {/* ✅ RSVP'd Events Section */}
        <h2 className={styles.pageTitle}>Your RSVP'd Events</h2>
        {rsvpedEvents.length > 0 ? (
          rsvpedEvents.map((event) => (
            <ActivityItem
              key={event.eventID}
              event={event}
              handleRSVP={handleRSVP}
              handleCancel={handleCancel}
              rsvped={true}
            />
          ))
        ) : (
          <p>No RSVP'd events yet.</p>
        )}

        {/* ✅ Bishop Thought */}
        <BishopThought
          message="As we gather and lift each other, the Spirit will always be present. – Bishop"
          quoteLeftSrc={quoteIcon}
          quoteRightSrc={quoteIcon}
        />

        {/* ✅ Modal */}
        {selectedEvent && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <h3>{selectedEvent.title}</h3>
              <p>{selectedEvent.description || 'No description available.'}</p>
              <button
                onClick={() => setSelectedEvent(null)}
                className={styles.submitButton}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomeDesign;
