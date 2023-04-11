// This is where the app component in App.js is imported and rendered.

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Gui from './components/Gui';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Gui />
  </React.StrictMode>
);