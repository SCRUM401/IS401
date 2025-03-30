import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import '../CSS/Calendar.css';

interface Event {
  eventID: number;
  eventName: string;
  beginTime: string;
  address: string;
  description?: string;
}

const CalendarView: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [isCalendarVisible, setIsCalendarVisible] = useState(true);

  useEffect(() => {
    fetchEventsForDate(date);
  }, [date]);

  const fetchEventsForDate = async (selectedDate: Date) => {
    // Replace with API call to fetch events for the selected date
    const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
    const fetchEvents = async () => {
      console.log(`Fetching events for: ${formattedDate}`);

      const url = 'https://localhost:5000/api/Church/Events';
      const response = await fetch(url);
      const data = await response.json();
      setEvents(data);
    };
    fetchEvents();
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
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
            onChange={(value) => setDate(value as Date)}
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

        {events.length > 0 ? (
          <div className="events-list">
            {events.map((event) => (
              <div key={event.eventID} className="event-card">
                <div className="event-date">{dayjs(date).format('M/D')}</div>
                <div className="event-title">
                  {event.eventName} -{' '}
                  {new Date(event.beginTime).toLocaleTimeString()}
                </div>
                <div className="event-location">{event.address}</div>
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

export default CalendarView;
