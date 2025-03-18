'use client';
import React, { useState } from 'react';
import styles from './NavigationTabs.module.css';

export interface NavigationTabsProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

const NavigationTabs: React.FC<NavigationTabsProps> = ({
  activeTab = 'home',
  onTabChange,
}) => {
  const [currentTab, setCurrentTab] = useState(activeTab);

  const handleTabClick = (tab: string) => {
    setCurrentTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <ul className={styles.tabList}>
          <li className={styles.tabItem}>
            <button
              className={`${styles.tabButton} ${
                currentTab === 'home' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabClick('home')}
              aria-selected={currentTab === 'home'}
              role="tab"
            >
              <span className={styles.iconWrapper}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3333 12C11.2333 12 10.2917 11.6083 9.50834 10.825C8.72501 10.0417 8.33334 9.1 8.33334 8C8.33334 6.9 8.72501 5.95833 9.50834 5.175C10.2917 4.39167 11.2333 4 12.3333 4C13.4333 4 14.375 4.39167 15.1583 5.175C15.9417 5.95833 16.3333 6.9 16.3333 8C16.3333 9.1 15.9417 10.0417 15.1583 10.825C14.375 11.6083 13.4333 12 12.3333 12ZM4.33334 20V17.2C4.33334 16.6333 4.47918 16.1125 4.77084 15.6375C5.06251 15.1625 5.45001 14.8 5.93334 14.55C6.96668 14.0333 8.01668 13.6458 9.08334 13.3875C10.15 13.1292 11.2333 13 12.3333 13C13.4333 13 14.5167 13.1292 15.5833 13.3875C16.65 13.6458 17.7 14.0333 18.7333 14.55C19.2167 14.8 19.6042 15.1625 19.8958 15.6375C20.1875 16.1125 20.3333 16.6333 20.3333 17.2V20H4.33334ZM6.33334 18H18.3333V17.2C18.3333 17.0167 18.2875 16.85 18.1958 16.7C18.1042 16.55 17.9833 16.4333 17.8333 16.35C16.9333 15.9 16.025 15.5625 15.1083 15.3375C14.1917 15.1125 13.2667 15 12.3333 15C11.4 15 10.475 15.1125 9.55834 15.3375C8.64168 15.5625 7.73334 15.9 6.83334 16.35C6.68334 16.4333 6.56251 16.55 6.47084 16.7C6.37918 16.85 6.33334 17.0167 6.33334 17.2V18ZM12.3333 10C12.8833 10 13.3542 9.80417 13.7458 9.4125C14.1375 9.02083 14.3333 8.55 14.3333 8C14.3333 7.45 14.1375 6.97917 13.7458 6.5875C13.3542 6.19583 12.8833 6 12.3333 6C11.7833 6 11.3125 6.19583 10.9208 6.5875C10.5292 6.97917 10.3333 7.45 10.3333 8C10.3333 8.55 10.5292 9.02083 10.9208 9.4125C11.3125 9.80417 11.7833 10 12.3333 10Z"
                    fill={currentTab === 'home' ? '#65558F' : '#49454F'}
                  />
                </svg>
              </span>
              <span
                className={`${styles.tabLabel} ${
                  currentTab === 'home' ? styles.activeLabel : ''
                }`}
              >
                Home
              </span>
              {currentTab === 'home' && (
                <span className={styles.activeIndicator}>
                  <span className={styles.indicatorLine}></span>
                </span>
              )}
            </button>
          </li>
          <li className={styles.tabItem}>
            <button
              className={`${styles.tabButton} ${
                currentTab === 'calendar' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabClick('calendar')}
              aria-selected={currentTab === 'calendar'}
              role="tab"
            >
              <span className={styles.iconWrapper}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.5C8.3 16.5 7.70833 16.2583 7.225 15.775C6.74167 15.2917 6.5 14.7 6.5 14C6.5 13.3 6.74167 12.7083 7.225 12.225C7.70833 11.7417 8.3 11.5 9 11.5C9.7 11.5 10.2917 11.7417 10.775 12.225C11.2583 12.7083 11.5 13.3 11.5 14C11.5 14.7 11.2583 15.2917 10.775 15.775C10.2917 16.2583 9.7 16.5 9 16.5ZM5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20Z"
                    fill={currentTab === 'calendar' ? '#65558F' : '#49454F'}
                  />
                </svg>
              </span>
              <span
                className={`${styles.tabLabel} ${
                  currentTab === 'calendar' ? styles.activeLabel : ''
                }`}
              >
                Calendar
              </span>
              {currentTab === 'calendar' && (
                <span className={styles.activeIndicator}>
                  <span className={styles.indicatorLine}></span>
                </span>
              )}
            </button>
          </li>
          <li className={styles.tabItem}>
            <button
              className={`${styles.tabButton} ${
                currentTab === 'request' ? styles.activeTab : ''
              }`}
              onClick={() => handleTabClick('request')}
              aria-selected={currentTab === 'request'}
              role="tab"
            >
              <span className={styles.iconWrapper}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9667 16.7L17.3667 15.3L13.6667 11.6V7H11.6667V12.4L15.9667 16.7ZM12.6667 22C11.2834 22 9.98335 21.7375 8.76669 21.2125C7.55002 20.6875 6.49169 19.975 5.59169 19.075C4.69169 18.175 3.97919 17.1167 3.45419 15.9C2.92919 14.6833 2.66669 13.3833 2.66669 12C2.66669 10.6167 2.92919 9.31667 3.45419 8.1C3.97919 6.88333 4.69169 5.825 5.59169 4.925C6.49169 4.025 7.55002 3.3125 8.76669 2.7875C9.98335 2.2625 11.2834 2 12.6667 2C14.05 2 15.35 2.2625 16.5667 2.7875C17.7834 3.3125 18.8417 4.025 19.7417 4.925C20.6417 5.825 21.3542 6.88333 21.8792 8.1C22.4042 9.31667 22.6667 10.6167 22.6667 12C22.6667 13.3833 22.4042 14.6833 21.8792 15.9C21.3542 17.1167 20.6417 18.175 19.7417 19.075C18.8417 19.975 17.7834 20.6875 16.5667 21.2125C15.35 21.7375 14.05 22 12.6667 22ZM12.6667 20C14.8834 20 16.7709 19.2208 18.3292 17.6625C19.8875 16.1042 20.6667 14.2167 20.6667 12C20.6667 9.78333 19.8875 7.89583 18.3292 6.3375C16.7709 4.77917 14.8834 4 12.6667 4C10.45 4 8.56252 4.77917 7.00419 6.3375C5.44585 7.89583 4.66669 9.78333 4.66669 12C4.66669 14.2167 5.44585 16.1042 7.00419 17.6625C8.56252 19.2208 10.45 20 12.6667 20Z"
                    fill={currentTab === 'request' ? '#65558F' : '#49454F'}
                  />
                </svg>
              </span>
              <span
                className={`${styles.tabLabel} ${
                  currentTab === 'request' ? styles.activeLabel : ''
                }`}
              >
                Request
              </span>
              {currentTab === 'request' && (
                <span className={styles.activeIndicator}>
                  <span className={styles.indicatorLine}></span>
                </span>
              )}
            </button>
          </li>
        </ul>
        <div className={styles.divider}></div>
      </div>
      <ul className={styles.secondaryTabList}>
        <li className={styles.tabItem}>
          <button
            className={`${styles.tabButton} ${
              currentTab === 'events' ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick('events')}
            aria-selected={currentTab === 'events'}
            role="tab"
          >
            <span className={styles.iconWrapper}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.33334 9V7H21.3333V9H7.33334ZM7.33334 13V11H21.3333V13H7.33334ZM7.33334 17V15H21.3333V17H7.33334ZM4.33334 9C4.05001 9 3.81251 8.90417 3.62084 8.7125C3.42918 8.52083 3.33334 8.28333 3.33334 8C3.33334 7.71667 3.42918 7.47917 3.62084 7.2875C3.81251 7.09583 4.05001 7 4.33334 7C4.61668 7 4.85418 7.09583 5.04584 7.2875C5.23751 7.47917 5.33334 7.71667 5.33334 8C5.33334 8.28333 5.23751 8.52083 5.04584 8.7125C4.85418 8.90417 4.61668 9 4.33334 9ZM4.33334 13C4.05001 13 3.81251 12.9042 3.62084 12.7125C3.42918 12.5208 3.33334 12.2833 3.33334 12C3.33334 11.7167 3.42918 11.4792 3.62084 11.2875C3.81251 11.0958 4.05001 11 4.33334 11C4.61668 11 4.85418 11.0958 5.04584 11.2875C5.23751 11.4792 5.33334 11.7167 5.33334 12C5.33334 12.2833 5.23751 12.5208 5.04584 12.7125C4.85418 12.9042 4.61668 13 4.33334 13ZM4.33334 17C4.05001 17 3.81251 16.9042 3.62084 16.7125C3.42918 16.5208 3.33334 16.2833 3.33334 16C3.33334 15.7167 3.42918 15.4792 3.62084 15.2875C3.81251 15.0958 4.05001 15 4.33334 15C4.61668 15 4.85418 15.0958 5.04584 15.2875C5.23751 15.4792 5.33334 15.7167 5.33334 16C5.33334 16.2833 5.23751 16.5208 5.04584 16.7125C4.85418 16.9042 4.61668 17 4.33334 17Z"
                  fill={currentTab === 'events' ? '#65558F' : '#49454F'}
                />
              </svg>
            </span>
            <span
              className={`${styles.tabLabel} ${
                currentTab === 'events' ? styles.activeLabel : ''
              }`}
            >
              Events
            </span>
            {currentTab === 'events' && (
              <span className={styles.activeIndicator}>
                <span className={styles.indicatorLine}></span>
              </span>
            )}
          </button>
        </li>
        <li className={styles.tabItem}>
          <button
            className={`${styles.tabButton} ${
              currentTab === 'chat' ? styles.activeTab : ''
            }`}
            onClick={() => handleTabClick('chat')}
            aria-selected={currentTab === 'chat'}
            role="tab"
          >
            <span className={styles.iconWrapper}>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.33334 22V4C2.33334 3.45 2.52917 2.97917 2.92084 2.5875C3.3125 2.19583 3.78334 2 4.33334 2H20.3333C20.8833 2 21.3542 2.19583 21.7458 2.5875C22.1375 2.97917 22.3333 3.45 22.3333 4V16C22.3333 16.55 22.1375 17.0208 21.7458 17.4125C21.3542 17.8042 20.8833 18 20.3333 18H6.33334L2.33334 22ZM5.48334 16H20.3333V4H4.33334V17.125L5.48334 16Z"
                  fill={currentTab === 'chat' ? '#65558F' : '#49454F'}
                />
              </svg>
            </span>
            <span
              className={`${styles.tabLabel} ${
                currentTab === 'chat' ? styles.activeLabel : ''
              }`}
            >
              Chat
            </span>
            {currentTab === 'chat' && (
              <span className={styles.activeIndicator}>
                <span className={styles.indicatorLine}></span>
              </span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationTabs;
