'use client';
import React, { useState, useEffect } from 'react';
import styles from './EventList.module.css';
import EventsHeader from './EventsHeader';
import ActivityItem from './ActivityItem';
import BottomNavigation from './BottomNavigation';

interface Event {
  EventID: number;
  EventName: string;
  Month: number;
  Day: number;
  Year: number;
}

const EventList: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [rsvpedEvents, setRsvpedEvents] = useState<Event[]>([]);  // RSVP'd events

  useEffect(() => {
    fetch("http://localhost:4000/api/Church/Events")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((event: any) => ({
          EventID: event.eventID,
          EventName: event.eventName,
          Month: event.month,
          Day: event.day,
          Year: event.year,
        }));
        setEvents(formattedData);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  // Handle RSVP click
  const handleRSVP = (eventId: number) => {
    const event = events.find((event) => event.EventID === eventId);
    if (event) {
      // Remove the event from the events list
      setEvents((prevEvents) => prevEvents.filter((e) => e.EventID !== eventId));

      // Add the event to the RSVP'd events list
      setRsvpedEvents((prevRsvped) => [...prevRsvped, event]);

      // Update the RSVP status in the backend
      fetch(`http://localhost:4000/api/church/rsvp/${eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rsvped: true }),
      })
        .then((response) => response.json())
        .then((data) => console.log("RSVP successful:", data))
        .catch((error) => console.error("Error RSVPing:", error));
    }
  };

  // Handle cancel RSVP click
  const handleCancel = (eventId: number) => {
    const event = rsvpedEvents.find((event) => event.EventID === eventId);
    if (event) {
      // Remove the event from the RSVP'd list
      setRsvpedEvents((prevRsvped) => prevRsvped.filter((e) => e.EventID !== eventId));

      // Add the event back to the events list
      setEvents((prevEvents) => [...prevEvents, event]);

      // Update the backend to cancel the RSVP
      fetch(`http://localhost:4000/api/church/cancelRsvp/${eventId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rsvped: false }),
      })
        .then((response) => response.json())
        .then((data) => console.log("RSVP canceled:", data))
        .catch((error) => console.error("Error canceling RSVP:", error));
    }
  };

  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400;500&family=SF+Pro:wght@400;590&display=swap"
          rel="stylesheet"
        />
        <div className={styles.div}>
          <EventsHeader />
          <main className={styles.div4}>
            <h2>Upcoming Events</h2>
            {events.length === 0 ? (
              <p>Loading events...</p>
            ) : (
              events.map((event) => (
                <ActivityItem
                  key={event.EventID}
                  event={event}
                  handleRSVP={handleRSVP}
                  handleCancel={handleCancel}
                  rsvped={rsvpedEvents.some((e) => e.EventID === event.EventID)}
                />
              ))
            )}

            <h2>Your RSVP'd Events</h2>
            {/* Display RSVP'd events */}
            {rsvpedEvents.length > 0 ? (
              <div className={styles.rsvpSection}>
                {rsvpedEvents.map((event) => (
                  <ActivityItem
                    key={event.EventID}
                    event={event}
                    handleRSVP={handleRSVP}
                    handleCancel={handleCancel}
                    rsvped={true}  // Mark as RSVP'd
                  />
                ))}
              </div>
            ) : (
              <p>No RSVP'd events yet.</p>
            )}
          </main>
          <BottomNavigation />
        </div>
      </div>
    </>
  );
};

export default EventList;
