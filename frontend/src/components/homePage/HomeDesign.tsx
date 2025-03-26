'use client';
import React from 'react';
import styles from './HomeInputDesign.module.css';

import HomeHeader from './HomeHeader';
import HomeEventSection from './HomeEventSection';
import BishopThought from './BishopThought';

function HomeDesign() {
  const upcomingEvents = [
    {
      date: 'Mar 28',
      title: 'Game Night',
      time: '7:00 PM',
      location: 'Institute Building',
    },
    {
      date: 'Mar 30',
      title: 'Sunday Dinner',
      time: '5:00 PM',
      location: 'Bishop’s House',
    },
  ];

  const styleClasses = {
    sectionHeader: styles.pageTitle,
    sectionTitle: styles.pageTitle,
    dateRange: '',
    divider: styles.divider || '',
    eventContainer: styles.formGroup,
    dateContainer: styles.fieldLabel,
    contentContainer: styles.formGroup,
    titleClass: styles.fieldLabel,
    locationClass: styles.fieldLabel,
    detailsClass: styles.submitButton,
  };

  return (
    <div className={styles.container}>
      <main className={styles.content}>
        <HomeHeader logoSrc="/logo.png" />
        <HomeEventSection
          title="Upcoming Events"
          events={upcomingEvents}
          styleClasses={styleClasses}
        />
        <BishopThought
          message="As we gather and lift each other, the Spirit will always be present. – Bishop"
          quoteLeftSrc={''}
          quoteRightSrc={''}
        />
      </main>
    </div>
  );
}

export default HomeDesign;
