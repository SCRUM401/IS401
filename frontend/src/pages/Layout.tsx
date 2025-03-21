import React from 'react';
import { Outlet } from "react-router-dom";
import BottomNavigation from '../components/BottomNavigation';

const Layout: React.FC = () => {
  return (
    <>
    <Outlet />
        <BottomNavigation />
    </>
  );
};

export default Layout