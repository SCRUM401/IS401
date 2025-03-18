import React from 'react';
import styles from './InputDesign.module.css';

interface CalendarGridProps {
  dates: Array<{
    date: number;
    month: 'prev' | 'current' | 'next';
    isSelected?: boolean;
  }>;
  weekdays: string[];
  onSelectDate: (date: number) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  dates,
  weekdays,
  onSelectDate,
}) => {
  return (
    <div className={styles.calendarContainer}>
      <div className={styles.weekdaysHeader}>
        {weekdays.map((day, index) => (
          <div key={index} className={styles.weekdayLabel}>
            {day}
          </div>
        ))}
      </div>
      <div className={styles.calendarContent}>
        <div className={styles.datesGrid}>
          {dates.map((dateObj, index) => (
            <div key={index} className={styles.dateCell}>
              <button
                className={
                  dateObj.isSelected
                    ? styles.selectedDate
                    : dateObj.month === 'current'
                    ? styles.currentMonthDate
                    : dateObj.month === 'prev'
                    ? styles.prevMonthDate
                    : styles.nextMonthDate
                }
                onClick={() =>
                  dateObj.month === 'current' && onSelectDate(dateObj.date)
                }
                aria-label={`${dateObj.date}`}
                aria-current={dateObj.isSelected ? 'date' : undefined}
              >
                {dateObj.date}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarGrid;
