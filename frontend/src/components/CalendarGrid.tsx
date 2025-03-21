import React, { useState } from 'react';
import {
  Calendar,
  momentLocalizer,
  Event,
  SlotInfo,
  View,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface CalendarEvent extends Event {
  id: number;
  title: string;
  start: Date;
  end: Date;
}

const CalendarGrid: React.FC = () => {
  const [events] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: 'Team Meeting',
      start: new Date(2025, 2, 20, 10, 0), // March 20, 2025, 10:00 AM
      end: new Date(2025, 2, 20, 11, 0),
    },
    {
      id: 2,
      title: 'Project Deadline',
      start: new Date(2025, 2, 20, 15, 0), // March 20, 2025, 3:00 PM
      end: new Date(2025, 2, 20, 16, 0),
    },
    {
      id: 3,
      title: 'Doctor Appointment',
      start: new Date(2025, 2, 25, 9, 30), // March 25, 2025, 9:30 AM
      end: new Date(2025, 2, 25, 10, 30),
    },
  ]);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [view, setView] = useState<View>('month'); // Tracks the current view

  const handleSelectSlot = (slotInfo: SlotInfo) => {
    setSelectedDate(slotInfo.start);
  };

  const selectedDayEvents = selectedDate
    ? events.filter((event) => moment(event.start).isSame(selectedDate, 'day'))
    : [];

  return (
    <div style={{ maxWidth: '900px', margin: 'auto' }}>
      <h2 style={{ textAlign: 'center' }}>Calendar</h2>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ width: '100%', height: '100%' }}
          selectable
          onSelectSlot={handleSelectSlot}
          onSelectEvent={(event: { title: any; }) => alert(`Event: ${event.title}`)}
          views={['month', 'week', 'day', 'agenda']} // Allow switching views
          defaultView="month" // Default to month view
          onView={(newView: any) => setView(newView)} // Track view changes
        />
      </div>

      {selectedDate && (
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <h3>Events on {moment(selectedDate).format('MMMM D, YYYY')}</h3>
          {selectedDayEvents.length > 0 ? (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {selectedDayEvents.map((event) => (
                <li key={event.id} style={{ padding: '5px 0' }}>
                  <strong>{event.title}</strong> -{' '}
                  {moment(event.start).format('h:mm A')} to{' '}
                  {moment(event.end).format('h:mm A')}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events for this day.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarGrid;
