import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import navBar from './component/navBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <navBar />
  </React.StrictMode>
);
