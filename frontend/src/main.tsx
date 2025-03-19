import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Use App.tsx instead of InputDesign.tsx
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>
);
