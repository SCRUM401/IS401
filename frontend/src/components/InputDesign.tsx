'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import EventSection from './EventSection';
import BishopsThought from './BishopsThought';
import NavigationBar from './NavigationBar';

const InputDesign: React.FC = () => {
  // Weekly events data
  const weeklyEvents = [
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

  // Favorited events data
  const favoritedEvents = [
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

  return (
    <main className={styles.container}>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&family=Jost:wght@700&display=swap"
        rel="stylesheet"
      />

      <header className={styles.headerContainer}>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="2088:951" width="398" height="50" viewBox="0 0 398 50" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="logo" style="width: 398px; height: 50px"> <g clip-path="url(#clip0_2088_951)"> <image x="10" y="4" width="40" height="40" href="https://assets.ldscdn.org/e9/38/e938f8f2f8f3e2597b1fd1dda7a095e24401a329/church_symbol_black.png"/> <text fill="#6947A3" xml:space="preserve" style="white-space: pre" font-family="Jost" font-size="40" font-weight="bold" letter-spacing="0em"><tspan x="158" y="42.9">YSA</tspan></text> <path d="M0 4L398 4" stroke="black"></path> <path d="M374 44.5C383.665 44.5 391.5 36.665 391.5 27C391.5 17.335 383.665 9.5 374 9.5C364.335 9.5 356.5 17.335 356.5 27C356.5 36.665 364.335 44.5 374 44.5Z" fill="url(#pattern1_2088_951)" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> <defs> <pattern id="pattern1_2088_951" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_2088_951" transform="translate(0 -0.25) scale(0.00104167)"></use> </pattern> <clipPath id="clip0_2088_951"> <rect width="398" height="50" fill="white"></rect> </clipPath> </defs> </svg>',
          }}
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d488afe7d1f626640a9d2b5da97ce2d7dd2b0a"
          srcSet="
            https://cdn.builder.io/api/v1/image/assets/TEMP/64d488afe7d1f626640a9d2b5da97ce2d7dd2b0a?width=400 400w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/64d488afe7d1f626640a9d2b5da97ce2d7dd2b0a?width=800 800w,
            https://cdn.builder.io/api/v1/image/assets/TEMP/64d488afe7d1f626640a9d2b5da97ce2d7dd2b0a?width=1200 1200w
          "
          sizes="(max-width: 640px) 100vw, 398px"
          alt="Group photo"
          className={styles.heroImage}
          loading="lazy"
          width="398"
          height="158"
        />
      </header>

      <section className={styles.contentContainer}>
        <EventSection
          title="WEEKLY EVENTS"
          dateRange="April 6 - April 12"
          events={weeklyEvents}
        />

        <EventSection title="FAVORITED EVENTS" events={favoritedEvents} />

        <BishopsThought message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eleifend efficitur. Ut bibendum pellentesque dui, sit amet tempor dolor viverra nec." />
      </section>

      <NavigationBar />
    </main>
  );
};

export default InputDesign;
