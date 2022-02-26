import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'



ReactDOM.render(
  <React.StrictMode>
  <AlertProvider>
    <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


