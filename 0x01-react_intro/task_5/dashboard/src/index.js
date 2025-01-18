import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App'; // Updated to match the correct file path
import Notifications from './Notifications/Notifications'; // Updated to match the correct file path

// Render App in the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
