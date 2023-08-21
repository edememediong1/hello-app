import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NumberCounter } from './App';
import UserProfileCard from './components/UserProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileCard/>
    <NumberCounter/>
    <App />
  </React.StrictMode>
);

