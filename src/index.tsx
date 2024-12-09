import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Force dark mode on initial load
document.documentElement.classList.add('dark');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);