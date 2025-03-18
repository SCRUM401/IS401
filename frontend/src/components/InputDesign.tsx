'use client';
import React, { useState } from 'react';
import styles from './InputDesign.module.css';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';
import ActivityList from './ActivityList';
import BottomNavigation from './BottomNavigation';

const WEEKDAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// Mock data for the calendar
const generateCalendarDates = () => {
  const dates = [];

  // Previous month dates (last days)
  for (let i = 26; i <= 31; i++) {
    dates.push({ date: i, month: 'prev' });
  }

  // Current month dates
  for (let i = 1; i <= 28; i++) {
    dates.push({
      date: i,
      month: 'current',
      isSelected: i === 12, // Selected date is 12th
    });
  }

  // Next month date (first day)
  dates.push({ date: 1, month: 'next' });

  return dates;
};

// Mock activities data
const ACTIVITIES = [
  {
    id: '1',
    date: '2/12',
    title: 'Time',
    time: '',
    location: 'Location',
  },
  {
    id: '2',
    date: '2/12',
    title: 'Title',
    time: 'Time',
    location: 'Location',
  },
  {
    id: '3',
    date: '2/12',
    title: 'Title',
    time: 'Time',
    location: 'Location',
  },
];

// Navigation items with icons
const NAV_ITEMS = [
  {
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.2659 12C11.1659 12 10.2242 11.6083 9.44087 10.825C8.65754 10.0417 8.26587 9.1 8.26587 8C8.26587 6.9 8.65754 5.95833 9.44087 5.175C10.2242 4.39167 11.1659 4 12.2659 4C13.3659 4 14.3075 4.39167 15.0909 5.175C15.8742 5.95833 16.2659 6.9 16.2659 8C16.2659 9.1 15.8742 10.0417 15.0909 10.825C14.3075 11.6083 13.3659 12 12.2659 12ZM4.26587 20V17.2C4.26587 16.6333 4.4117 16.1125 4.70337 15.6375C4.99504 15.1625 5.38254 14.8 5.86587 14.55C6.8992 14.0333 7.9492 13.6458 9.01587 13.3875C10.0825 13.1292 11.1659 13 12.2659 13C13.3659 13 14.4492 13.1292 15.5159 13.3875C16.5825 13.6458 17.6325 14.0333 18.6659 14.55C19.1492 14.8 19.5367 15.1625 19.8284 15.6375C20.12 16.1125 20.2659 16.6333 20.2659 17.2V20H4.26587ZM6.26587 18H18.2659V17.2C18.2659 17.0167 18.22 16.85 18.1284 16.7C18.0367 16.55 17.9159 16.4333 17.7659 16.35C16.8659 15.9 15.9575 15.5625 15.0409 15.3375C14.1242 15.1125 13.1992 15 12.2659 15C11.3325 15 10.4075 15.1125 9.49087 15.3375C8.5742 15.5625 7.66587 15.9 6.76587 16.35C6.61587 16.4333 6.49504 16.55 6.40337 16.7C6.3117 16.85 6.26587 17.0167 6.26587 17.2V18ZM12.2659 10C12.8159 10 13.2867 9.80417 13.6784 9.4125C14.07 9.02083 14.2659 8.55 14.2659 8C14.2659 7.45 14.07 6.97917 13.6784 6.5875C13.2867 6.19583 12.8159 6 12.2659 6C11.7159 6 11.245 6.19583 10.8534 6.5875C10.4617 6.97917 10.2659 7.45 10.2659 8C10.2659 8.55 10.4617 9.02083 10.8534 9.4125C11.245 9.80417 11.7159 10 12.2659 10Z"
          fill="#65558F"
        ></path>
      </svg>
    ),
    label: 'Home',
    isActive: true,
  },
  {
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.79761 16.5C9.09761 16.5 8.50594 16.2583 8.02261 15.775C7.53927 15.2917 7.29761 14.7 7.29761 14C7.29761 13.3 7.53927 12.7083 8.02261 12.225C8.50594 11.7417 9.09761 11.5 9.79761 11.5C10.4976 11.5 11.0893 11.7417 11.5726 12.225C12.0559 12.7083 12.2976 13.3 12.2976 14C12.2976 14.7 12.0559 15.2917 11.5726 15.775C11.0893 16.2583 10.4976 16.5 9.79761 16.5ZM5.79761 22C5.24761 22 4.77677 21.8042 4.38511 21.4125C3.99344 21.0208 3.79761 20.55 3.79761 20V6C3.79761 5.45 3.99344 4.97917 4.38511 4.5875C4.77677 4.19583 5.24761 4 5.79761 4H6.79761V2H8.79761V4H16.7976V2H18.7976V4H19.7976C20.3476 4 20.8184 4.19583 21.2101 4.5875C21.6018 4.97917 21.7976 5.45 21.7976 6V20C21.7976 20.55 21.6018 21.0208 21.2101 21.4125C20.8184 21.8042 20.3476 22 19.7976 22H5.79761ZM5.79761 20H19.7976V10H5.79761V20Z"
          fill="#49454F"
        ></path>
      </svg>
    ),
    label: 'Calendar',
    isActive: false,
  },
  {
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6293 16.7L17.0293 15.3L13.3293 11.6V7H11.3293V12.4L15.6293 16.7ZM12.3293 22C10.946 22 9.64595 21.7375 8.42928 21.2125C7.21262 20.6875 6.15428 19.975 5.25428 19.075C4.35428 18.175 3.64178 17.1167 3.11678 15.9C2.59178 14.6833 2.32928 13.3833 2.32928 12C2.32928 10.6167 2.59178 9.31667 3.11678 8.1C3.64178 6.88333 4.35428 5.825 5.25428 4.925C6.15428 4.025 7.21262 3.3125 8.42928 2.7875C9.64595 2.2625 10.946 2 12.3293 2C13.7126 2 15.0126 2.2625 16.2293 2.7875C17.446 3.3125 18.5043 4.025 19.4043 4.925C20.3043 5.825 21.0168 6.88333 21.5418 8.1C22.0668 9.31667 22.3293 10.6167 22.3293 12C22.3293 13.3833 22.0668 14.6833 21.5418 15.9C21.0168 17.1167 20.3043 18.175 19.4043 19.075C18.5043 19.975 17.446 20.6875 16.2293 21.2125C15.0126 21.7375 13.7126 22 12.3293 22ZM12.3293 20C14.546 20 16.4335 19.2208 17.9918 17.6625C19.5501 16.1042 20.3293 14.2167 20.3293 12C20.3293 9.78333 19.5501 7.89583 17.9918 6.3375C16.4335 4.77917 14.546 4 12.3293 4C10.1126 4 8.22512 4.77917 6.66678 6.3375C5.10845 7.89583 4.32928 9.78333 4.32928 12C4.32928 14.2167 5.10845 16.1042 6.66678 17.6625C8.22512 19.2208 10.1126 20 12.3293 20Z"
          fill="#49454F"
        ></path>
      </svg>
    ),
    label: 'Request',
    isActive: false,
  },
  {
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.86096 9V7H21.861V9H7.86096ZM7.86096 13V11H21.861V13H7.86096ZM7.86096 17V15H21.861V17H7.86096ZM4.86096 9C4.57763 9 4.34013 8.90417 4.14846 8.7125C3.9568 8.52083 3.86096 8.28333 3.86096 8C3.86096 7.71667 3.9568 7.47917 4.14846 7.2875C4.34013 7.09583 4.57763 7 4.86096 7C5.1443 7 5.3818 7.09583 5.57346 7.2875C5.76513 7.47917 5.86096 7.71667 5.86096 8C5.86096 8.28333 5.76513 8.52083 5.57346 8.7125C5.3818 8.90417 5.1443 9 4.86096 9ZM4.86096 13C4.57763 13 4.34013 12.9042 4.14846 12.7125C3.9568 12.5208 3.86096 12.2833 3.86096 12C3.86096 11.7167 3.9568 11.4792 4.14846 11.2875C4.34013 11.0958 4.57763 11 4.86096 11C5.1443 11 5.3818 11.0958 5.57346 11.2875C5.76513 11.4792 5.86096 11.7167 5.86096 12C5.86096 12.2833 5.76513 12.5208 5.57346 12.7125C5.3818 12.9042 5.1443 13 4.86096 13ZM4.86096 17C4.57763 17 4.34013 16.9042 4.14846 16.7125C3.9568 16.5208 3.86096 16.2833 3.86096 16C3.86096 15.7167 3.9568 15.4792 4.14846 15.2875C4.34013 15.0958 4.57763 15 4.86096 15C5.1443 15 5.3818 15.0958 5.57346 15.2875C5.76513 15.4792 5.86096 15.7167 5.86096 16C5.86096 16.2833 5.76513 16.5208 5.57346 16.7125C5.3818 16.9042 5.1443 17 4.86096 17Z"
          fill="#49454F"
        ></path>
      </svg>
    ),
    label: 'Events',
    isActive: false,
  },
  {
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.73413 22V4C2.73413 3.45 2.92996 2.97917 3.32163 2.5875C3.7133 2.19583 4.18413 2 4.73413 2H20.7341C21.2841 2 21.755 2.19583 22.1466 2.5875C22.5383 2.97917 22.7341 3.45 22.7341 4V16C22.7341 16.55 22.5383 17.0208 22.1466 17.4125C21.755 17.8042 21.2841 18 20.7341 18H6.73413L2.73413 22ZM5.88413 16H20.7341V4H4.73413V17.125L5.88413 16Z"
          fill="#49454F"
        ></path>
      </svg>
    ),
    label: 'Chat',
    isActive: false,
  },
];

const InputDesign: React.FC = () => {
  const [view, setView] = useState<'week' | 'month'>('month');
  const [currentMonth, setCurrentMonth] = useState('February 2025');
  const [selectedDate, setSelectedDate] = useState(12);
  const [calendarDates] = useState(generateCalendarDates());
  const [navItems, setNavItems] = useState(NAV_ITEMS);

  const handlePrevMonth = () => {
    // In a real app, this would update the calendar dates
    setCurrentMonth('January 2025');
  };

  const handleNextMonth = () => {
    // In a real app, this would update the calendar dates
    setCurrentMonth('March 2025');
  };

  const handleViewChange = (newView: 'week' | 'month') => {
    setView(newView);
  };

  const handleSelectDate = (date: number) => {
    // Update selected date and reset all other dates
    const updatedDates = calendarDates.map((dateObj) => ({
      ...dateObj,
      isSelected: dateObj.date === date && dateObj.month === 'current',
    }));

    setSelectedDate(date);
  };

  const handleNavItemClick = (index: number) => {
    const updatedNavItems = navItems.map((item, i) => ({
      ...item,
      isActive: i === index,
    }));

    setNavItems(updatedNavItems);
  };

  return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        <section className={styles.calendarSection}>
          <CalendarHeader
            currentMonth={currentMonth}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            view={view}
            onViewChange={handleViewChange}
          />
          <div className={styles.divider} />
        </section>

        <CalendarGrid
          dates={calendarDates}
          weekdays={WEEKDAYS}
          onSelectDate={handleSelectDate}
        />

        <ActivityList selectedDate="2/12 - Wednesday" activities={ACTIVITIES} />
      </main>

      <BottomNavigation items={navItems} onNavItemClick={handleNavItemClick} />
    </div>
  );
};

export default InputDesign;
