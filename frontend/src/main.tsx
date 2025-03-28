<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import EventList from './components/EventList.tsx';
=======
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Use App.tsx instead of InputDesign.tsx
import "./index.css";
>>>>>>> 7c3e732616e2a2bac02f332c59fcab71c3e45267

createRoot(document.getElementById("root")!).render(
  <StrictMode>
<<<<<<< HEAD
    <EventList />
=======
      <App />
>>>>>>> 7c3e732616e2a2bac02f332c59fcab71c3e45267
  </StrictMode>
);
