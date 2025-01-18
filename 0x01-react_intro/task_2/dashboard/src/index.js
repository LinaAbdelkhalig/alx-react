// task_1/dashboard/src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';

// Render App in the 'root' div
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // Render Notifications in the 'root-notifications' div
// const rootNotifications = ReactDOM.createRoot(
//   document.getElementById('root-notifications')
// );
// rootNotifications.render(
//   <React.StrictMode>
//     <Notifications />
//   </React.StrictMode>
// );
