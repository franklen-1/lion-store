import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LionStoreApp } from './LionStoreApp';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LionStoreApp />
  </StrictMode>
);
