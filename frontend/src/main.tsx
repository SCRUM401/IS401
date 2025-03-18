import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import InputDesign from './components/InputDesign.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InputDesign />
  </StrictMode>
);
