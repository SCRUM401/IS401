import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';
import SignInPage from './components/SignInPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignInPage />
  </StrictMode>
);
