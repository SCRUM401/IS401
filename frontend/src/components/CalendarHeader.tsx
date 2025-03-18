import React from 'react';
import styles from './InputDesign.module.css';

interface CalendarHeaderProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  view: 'week' | 'month';
  onViewChange: (view: 'week' | 'month') => void;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
  view,
  onViewChange,
}) => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.monthNavigation}>
        <div className={styles.monthDisplay}>{currentMonth}</div>
        <button onClick={onPrevMonth} aria-label="Previous month">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.575 13.5L14.175 19.1L12.75 20.5L4.75 12.5L12.75 4.5L14.175 5.9L8.575 11.5H20.75V13.5H8.575Z"
              fill="#1D1B20"
            ></path>
          </svg>
        </button>
        <button onClick={onNextMonth} aria-label="Next month">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.925 13.5H4.75V11.5H16.925L11.325 5.9L12.75 4.5L20.75 12.5L12.75 20.5L11.325 19.1L16.925 13.5Z"
              fill="#1D1B20"
            ></path>
          </svg>
        </button>
      </div>
      <div className={styles.viewToggleContainer}>
        <div className={styles.weekToggleWrapper}>
          <button
            className={styles.weekToggle}
            onClick={() => onViewChange('week')}
            aria-pressed={view === 'week'}
          >
            <div className={styles.weekToggleText}>Week</div>
          </button>
        </div>
        <div className={styles.monthToggleWrapper}>
          <button
            className={styles.monthToggle}
            onClick={() => onViewChange('month')}
            aria-pressed={view === 'month'}
          >
            <div className={styles.monthToggleInner}>
              {view === 'month' && (
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.03751 14L3.76251 9.725L4.83126 8.65625L8.03751 11.8625L14.9188 4.98125L15.9875 6.05L8.03751 14Z"
                    fill="#4A4459"
                  ></path>
                </svg>
              )}
              <div className={styles.monthToggleText}>Month</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
