'use client';
import React from 'react';
import styles from './InputDesign.module.css';
import Header from './Header';
import EventSection from './EventSection';
import BishopThought from './BishopThought';
import BottomNavigation from './BottomNavigation';

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

  // RSVP events data
  const rsvpEvents = [
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

  // Navigation items
  const navItems = [
    {
      icon: '<svg id=&quot;I2261:844;5:1374;54563:40095;54563:40175&quot; layer-name=&quot;icon&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M12.7654 12C11.6654 12 10.7238 11.6083 9.94044 10.825C9.15711 10.0417 8.76544 9.1 8.76544 8C8.76544 6.9 9.15711 5.95833 9.94044 5.175C10.7238 4.39167 11.6654 4 12.7654 4C13.8654 4 14.8071 4.39167 15.5904 5.175C16.3738 5.95833 16.7654 6.9 16.7654 8C16.7654 9.1 16.3738 10.0417 15.5904 10.825C14.8071 11.6083 13.8654 12 12.7654 12ZM4.76544 20V17.2C4.76544 16.6333 4.91128 16.1125 5.20294 15.6375C5.49461 15.1625 5.88211 14.8 6.36544 14.55C7.39878 14.0333 8.44878 13.6458 9.51544 13.3875C10.5821 13.1292 11.6654 13 12.7654 13C13.8654 13 14.9488 13.1292 16.0154 13.3875C17.0821 13.6458 18.1321 14.0333 19.1654 14.55C19.6488 14.8 20.0363 15.1625 20.3279 15.6375C20.6196 16.1125 20.7654 16.6333 20.7654 17.2V20H4.76544ZM6.76544 18H18.7654V17.2C18.7654 17.0167 18.7196 16.85 18.6279 16.7C18.5363 16.55 18.4154 16.4333 18.2654 16.35C17.3654 15.9 16.4571 15.5625 15.5404 15.3375C14.6238 15.1125 13.6988 15 12.7654 15C11.8321 15 10.9071 15.1125 9.99044 15.3375C9.07378 15.5625 8.16544 15.9 7.26544 16.35C7.11544 16.4333 6.99461 16.55 6.90294 16.7C6.81128 16.85 6.76544 17.0167 6.76544 17.2V18ZM12.7654 10C13.3154 10 13.7863 9.80417 14.1779 9.4125C14.5696 9.02083 14.7654 8.55 14.7654 8C14.7654 7.45 14.5696 6.97917 14.1779 6.5875C13.7863 6.19583 13.3154 6 12.7654 6C12.2154 6 11.7446 6.19583 11.3529 6.5875C10.9613 6.97917 10.7654 7.45 10.7654 8C10.7654 8.55 10.9613 9.02083 11.3529 9.4125C11.7446 9.80417 12.2154 10 12.7654 10Z&quot; fill=&quot;#65558F&quot;></path> </svg>',
      label: 'Home',
      isActive: true,
    },
    {
      icon: '<svg id=&quot;I2261:844;5:1374;54563:40096;54563:40206&quot; layer-name=&quot;icon&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M9.29626 16.5C8.59626 16.5 8.0046 16.2583 7.52126 15.775C7.03793 15.2917 6.79626 14.7 6.79626 14C6.79626 13.3 7.03793 12.7083 7.52126 12.225C8.0046 11.7417 8.59626 11.5 9.29626 11.5C9.99626 11.5 10.5879 11.7417 11.0713 12.225C11.5546 12.7083 11.7963 13.3 11.7963 14C11.7963 14.7 11.5546 15.2917 11.0713 15.775C10.5879 16.2583 9.99626 16.5 9.29626 16.5ZM5.29626 22C4.74626 22 4.27543 21.8042 3.88376 21.4125C3.4921 21.0208 3.29626 20.55 3.29626 20V6C3.29626 5.45 3.4921 4.97917 3.88376 4.5875C4.27543 4.19583 4.74626 4 5.29626 4H6.29626V2H8.29626V4H16.2963V2H18.2963V4H19.2963C19.8463 4 20.3171 4.19583 20.7088 4.5875C21.1004 4.97917 21.2963 5.45 21.2963 6V20C21.2963 20.55 21.1004 21.0208 20.7088 21.4125C20.3171 21.8042 19.8463 22 19.2963 22H5.29626ZM5.29626 20H19.2963V10H5.29626V20Z&quot; fill=&quot;#49454F&quot;></path> </svg>',
      label: 'Calendar',
    },
    {
      icon: '<svg id=&quot;I2261:844;5:1374;54563:40097;54563:40206&quot; layer-name=&quot;icon&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M16.1271 16.7L17.5271 15.3L13.8271 11.6V7H11.8271V12.4L16.1271 16.7ZM12.8271 22C11.4438 22 10.1438 21.7375 8.92709 21.2125C7.71042 20.6875 6.65209 19.975 5.75209 19.075C4.85209 18.175 4.13959 17.1167 3.61459 15.9C3.08959 14.6833 2.82709 13.3833 2.82709 12C2.82709 10.6167 3.08959 9.31667 3.61459 8.1C4.13959 6.88333 4.85209 5.825 5.75209 4.925C6.65209 4.025 7.71042 3.3125 8.92709 2.7875C10.1438 2.2625 11.4438 2 12.8271 2C14.2104 2 15.5104 2.2625 16.7271 2.7875C17.9438 3.3125 19.0021 4.025 19.9021 4.925C20.8021 5.825 21.5146 6.88333 22.0396 8.1C22.5646 9.31667 22.8271 10.6167 22.8271 12C22.8271 13.3833 22.5646 14.6833 22.0396 15.9C21.5146 17.1167 20.8021 18.175 19.9021 19.075C19.0021 19.975 17.9438 20.6875 16.7271 21.2125C15.5104 21.7375 14.2104 22 12.8271 22ZM12.8271 20C15.0438 20 16.9313 19.2208 18.4896 17.6625C20.0479 16.1042 20.8271 14.2167 20.8271 12C20.8271 9.78333 20.0479 7.89583 18.4896 6.3375C16.9313 4.77917 15.0438 4 12.8271 4C10.6104 4 8.72292 4.77917 7.16459 6.3375C5.60625 7.89583 4.82709 9.78333 4.82709 12C4.82709 14.2167 5.60625 16.1042 7.16459 17.6625C8.72292 19.2208 10.6104 20 12.8271 20Z&quot; fill=&quot;#49454F&quot;></path> </svg>',
      label: 'Request',
    },
    {
      icon: '<svg id=&quot;I2261:844;5:2577;54563:40206&quot; layer-name=&quot;icon&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M7.35791 9V7H21.3579V9H7.35791ZM7.35791 13V11H21.3579V13H7.35791ZM7.35791 17V15H21.3579V17H7.35791ZM4.35791 9C4.07458 9 3.83708 8.90417 3.64541 8.7125C3.45374 8.52083 3.35791 8.28333 3.35791 8C3.35791 7.71667 3.45374 7.47917 3.64541 7.2875C3.83708 7.09583 4.07458 7 4.35791 7C4.64124 7 4.87874 7.09583 5.07041 7.2875C5.26208 7.47917 5.35791 7.71667 5.35791 8C5.35791 8.28333 5.26208 8.52083 5.07041 8.7125C4.87874 8.90417 4.64124 9 4.35791 9ZM4.35791 13C4.07458 13 3.83708 12.9042 3.64541 12.7125C3.45374 12.5208 3.35791 12.2833 3.35791 12C3.35791 11.7167 3.45374 11.4792 3.64541 11.2875C3.83708 11.0958 4.07458 11 4.35791 11C4.64124 11 4.87874 11.0958 5.07041 11.2875C5.26208 11.4792 5.35791 11.7167 5.35791 12C5.35791 12.2833 5.26208 12.5208 5.07041 12.7125C4.87874 12.9042 4.64124 13 4.35791 13ZM4.35791 17C4.07458 17 3.83708 16.9042 3.64541 16.7125C3.45374 16.5208 3.35791 16.2833 3.35791 16C3.35791 15.7167 3.45374 15.4792 3.64541 15.2875C3.83708 15.0958 4.07458 15 4.35791 15C4.64124 15 4.87874 15.0958 5.07041 15.2875C5.26208 15.4792 5.35791 15.7167 5.35791 16C5.35791 16.2833 5.26208 16.5208 5.07041 16.7125C4.87874 16.9042 4.64124 17 4.35791 17Z&quot; fill=&quot;#49454F&quot;></path> </svg>',
      label: 'Events',
    },
    {
      icon: '<svg id=&quot;I2261:844;5:2586;54563:40206&quot; layer-name=&quot;icon&quot; width=&quot;25&quot; height=&quot;24&quot; viewBox=&quot;0 0 25 24&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;nav-icon&quot; style=&quot;width: 24px; height: 24px&quot;> <path d=&quot;M2.2345 22V4C2.2345 3.45 2.43033 2.97917 2.822 2.5875C3.21366 2.19583 3.6845 2 4.2345 2H20.2345C20.7845 2 21.2553 2.19583 21.647 2.5875C22.0387 2.97917 22.2345 3.45 22.2345 4V16C22.2345 16.55 22.0387 17.0208 21.647 17.4125C21.2553 17.8042 20.7845 18 20.2345 18H6.2345L2.2345 22ZM5.3845 16H20.2345V4H4.2345V17.125L5.3845 16Z&quot; fill=&quot;#49454F&quot;></path> </svg>',
      label: 'Ward Chat',
    },
  ];

  return (
    <>
      <div>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&family=Jost:wght@700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <main className={styles.div}>
          <Header logoSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/fb11b84baa2500bf7b1658e1bbec008660769ca9" />

          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/64d488afe7d1f626640a9d2b5da97ce2d7dd2b0a"
            alt="Banner"
            className={styles.banner}
          />

          <div className={styles.div4}>
            <EventSection
              title="WEEKLY EVENTS"
              dateRange="April 6 - April 12"
              events={weeklyEvents}
              styleClasses={{
                sectionHeader: styles.div5,
                sectionTitle: styles.div6,
                dateRange: styles.div7,
                divider: styles.div8,
                eventContainer: styles.div9,
                dateContainer: styles.div10,
                contentContainer: styles.div11,
                titleClass: styles.div12,
                locationClass: styles.div13,
                detailsClass: styles.div14,
              }}
            />

            <EventSection
              title="RSVP EVENTS"
              events={rsvpEvents}
              styleClasses={{
                sectionHeader: styles.div21,
                sectionTitle: styles.div22,
                divider: styles.div23,
                eventContainer: styles.div24,
                dateContainer: styles.div25,
                contentContainer: styles.div26,
                titleClass: styles.div27,
                locationClass: styles.div28,
                detailsClass: styles.div29,
              }}
            />
          </div>

          <BishopThought
            quoteLeftSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/4ef000593152a9be0c08920cf69d182a210f452c"
            quoteRightSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/45dc040d65e7f04f7975bd3042d8702c467ba405"
            message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus eleifend efficitur. Ut bibendum pellentesque dui, sit amet tempor dolor viverra nec."
          />

          <BottomNavigation items={navItems} />
        </main>
      </div>
    </>
  );
};

export default InputDesign;
