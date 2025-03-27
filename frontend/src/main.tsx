import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EventList from './components/EventList.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <EventList />
  </StrictMode>
);
