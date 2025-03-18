import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './components/InputDesign.module.css';
import './index.css';
import YsaApp from './components/YsaApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <YsaApp />
  </StrictMode>
);
