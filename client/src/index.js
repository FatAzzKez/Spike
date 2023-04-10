// This is where the app component in App.js is imported and rendered.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gui from './components/Gui';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gui />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
