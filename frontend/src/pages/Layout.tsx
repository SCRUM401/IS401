import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import BottomNavigation from '../components/BottomNavigation';

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <Outlet />
      {/* Hide BottomNavigation on the Login page */}
      {location.pathname !== '/Login' && location.pathname !== '/Login2' && (
        <BottomNavigation />
      )}
    </>
  );
};

export default Layout;
