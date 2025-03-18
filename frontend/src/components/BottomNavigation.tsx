import React from 'react';
import styles from './InputDesign.module.css';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

interface BottomNavigationProps {
  items: NavItem[];
  onNavItemClick: (index: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  items,
  onNavItemClick,
}) => {
  return (
    <nav className={styles.bottomNav} aria-label="Main Navigation">
      <div className={styles.navContainer}>
        {items.map((item, index) => (
          <button
            key={index}
            className={styles.navItem}
            onClick={() => onNavItemClick(index)}
            aria-current={item.isActive ? 'page' : undefined}
          >
            <div className={styles.navItemContent}>
              {item.icon}
              <div
                className={
                  item.isActive ? styles.navItemActive : styles.navItemText
                }
              >
                {item.label}
              </div>
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
