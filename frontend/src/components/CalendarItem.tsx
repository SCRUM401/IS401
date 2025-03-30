import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import '../CSS/Calendar.css';

interface Event {
  id: number;
  title: string;
  time: string;
  location: string;
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
    console.log(`Fetching events for: ${formattedDate}`);

    // Mock data for now
    const mockEvents: Event[] = [
      {
        id: 1,
        title: 'Linger-longer',
        time: '1:00 PM',
        location: 'Stake Center Pavillion',
        description: 'Bring a dish to share!',
      },
      {
        id: 2,
        title: 'RS Volleyball Tournament',
        time: '2:00 PM',
        location: 'Stake Center Gym',
        description: 'Join us for a fun tournament!',
      },
    ];

    setEvents(mockEvents);
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
            onChange={setDate}
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
              <div key={event.id} className="event-card">
                <div className="event-date">{dayjs(date).format('M/D')}</div>
                <div className="event-title">
                  {event.title} - {event.time}
                </div>
                <div className="event-location">{event.location}</div>
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
