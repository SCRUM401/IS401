'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import EventsHeader from './EventsHeader';
import ActivityItem from './ActivityItem';
import BottomNavigation from './BottomNavigation';

const InputDesign: React.FC = () => {
  // Sample activity data
  const activities = Array(8).fill('Activity Name');

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
            {activities.map((activity, index) => (
              <ActivityItem
                key={index}
                activityName={activity}
                isActive={index === 0}
              />
            ))}
          </main>
          <BottomNavigation />
        </div>
      </div>
    </>
  );
};

export default InputDesign;
