import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import '../CSS/Calendar.css';

interface Event {
  id: number;
  eventName: string;
  description?: string;
  month: number;
  day: number;
  year: number;
  beginTime: string;
  endTime: string;
  address: string;
  city: string;
  state: string;
  zip: string;
}

const CalendarItem: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  // Fetch all events when the component mounts
  useEffect(() => {
    fetchAllEvents();
  }, []);

  // Fetch all events from the API
  const fetchAllEvents = async () => {
    try {
      const response = await fetch('https://localhost:5000/api/church/events');
      const data: Event[] = await response.json();
      setEvents(data); // Store all events
      console
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Filter events when a specific day is clicked
  const handleDayClick = (selectedDate: Date) => {
    setDate(selectedDate); // Update the selected date

    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    console.log("Formatted Date:", formattedDate);

    // Filter events by matching year, month, and day
    const eventsForSelectedDate = events.filter((event) => {
      const eventDate = dayjs(
        `${event.year}-${event.month.toString().padStart(2, '0')}-${event.day.toString().padStart(2, '0')}`
      ).format('YYYY-MM-DD');
      return eventDate === formattedDate;
    });

    console.log("Filtered Events for selected date:", eventsForSelectedDate);
    setFilteredEvents(eventsForSelectedDate); // Update filtered events for the selected date
  };

  return (
    <div className="calendar-container">
      <h2 className="page-title">Events Calendar</h2>

      <div className="date-selector">
        <h3 className="selected-date">{dayjs(date).format('MMMM D, YYYY')}</h3>
      </div>

      {isCalendarVisible && (
        <div className="calendar-wrapper">
          <Calendar
            onChange={handleDayClick} // Set the function to filter events when a day is clicked
            value={date}
            tileClassName={({ date, view }) =>
              view === 'month' && events.length > 0 ? 'has-events' : ''
            }
            className="responsive-calendar"
          />
        </div>
      )}

      <div className="events-section">
        <h3 className="events-date">{dayjs(date).format('M/D - dddd')}</h3>

        {filteredEvents.length > 0 ? (
          <div className="events-list">
            {filteredEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-date">{dayjs(date).format('M/D')}</div>
                <div className="event-title">
                  {event.eventName} - {dayjs(event.beginTime).format('h:mm A')} to {dayjs(event.endTime).format('h:mm A')}
                </div>
                <div className="event-location">{event.address}, {event.city}, {event.state} {event.zip}</div>
                {event.description && (
                  <div className="event-description">{event.description}</div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-events-message">No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarItem;
