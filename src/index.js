import React from 'react';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
registerServiceWorker();
