import React from 'react';
import styles from './InputDesign.module.css';

interface NavItemProps {
  name: string;
  icon: string;
  active: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ name, icon, active }) => {
  return (
    <div className={active ? styles.navItemActive : styles.navItem}>
      <div aria-hidden="true" dangerouslySetInnerHTML={{ __html: icon }} />
      <span>{name}</span>
    </div>
  );
};

export default NavItem;
