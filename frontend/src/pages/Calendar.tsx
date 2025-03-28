import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

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
        title: 'Meeting',
        time: '10:00 AM',
        location: 'Conference Room',
        description: 'Monthly team meeting',
      },
      {
        id: 2,
        title: 'Workshop',
        time: '2:00 PM',
        location: 'Hall B',
        description: 'Skill development workshop',
      },
    ];

    setEvents(mockEvents);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">
        {dayjs(date).format('MMMM YYYY')}
      </h2>
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date }) => (events.length > 0 ? 'bg-purple-200' : '')}
      />

      <div className="mt-4 border-t pt-4">
        <h3 className="text-lg font-semibold">
          {dayjs(date).format('M/D - dddd')}
        </h3>
        <p className="text-gray-600">Activities</p>
        {events.length > 0 ? (
          events.map((event) => (
            <div
              key={event.id}
              className="mt-2 p-3 bg-purple-600 text-white rounded-md"
            >
              <div className="text-lg font-bold">
                {dayjs(date).format('M/D')}
              </div>
              <div className="font-semibold">
                {event.title} - {event.time}
              </div>
              <div>{event.location}</div>
              {event.description && (
                <a href="#" className="text-blue-200 underline">
                  More Details...
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No events for this day.</p>
        )}
      </div>
    </div>
  );
};

export default CalendarView;
