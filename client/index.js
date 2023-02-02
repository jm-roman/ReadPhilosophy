import React from 'react';
import { createRoot } from 'react-dom/client';
import { render } from 'react-dom';
import Reader from './components/Reader';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';

import styles from './scss/application.scss';

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
