'use client';

import React from 'react';
import Header from './Header';
import HeroImage from './HeroImage';
import EventSection from './EventSection';
import BishopsThought from './BishopsThought';
import NavigationTabs from './NavigationTabs';
import { EventItem } from './types';

const weeklyEvents: EventItem[] = [
  {
    date: '4/7',
    title: 'FHE',
    time: '7:00 PM',
    location: 'Church Building',
  },
  {
    date: '4/12',
    title: 'Tubing Provo River',
    time: '1:30 PM',
    location: '6828 S Fork Rd. Provo, UT 84604',
  },
];

const favoritedEvents: EventItem[] = [
  {
    date: '4/7',
    title: 'FHE',
    time: '7:00 PM',
    location: 'Church Building',
  },
  {
    date: '5/3',
    title: "School's Out BBQ",
    time: '12:30 PM',
    location: 'Joaquin Park- 378 N 400 E, Provo, UT 84606',
  },
];

const YsaApp: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col mx-auto my-0 w-full min-h-screen bg-white max-w-[398px] max-sm:max-w-full">
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&family=Jost:wght@700&display=swap"
        rel="stylesheet"
      />
      <header className="flex flex-col items-center">
        <Header />
        <HeroImage />
      </header>
      <main className="px-8 py-0 max-sm:px-4 max-sm:py-0">
        <EventSection
          title="WEEKLY EVENTS"
          // subtitle="April 6 - April 12"
          events={weeklyEvents}
        />
        <EventSection title="FAVORITED EVENTS" events={favoritedEvents} />
        <BishopsThought message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eleifend efficitur. Ut bibendum pellentesque dui, sit amet tempor dolor viverra nec." />
      </main>
      <NavigationTabs />
    </div>
  );
};

export default YsaApp;
