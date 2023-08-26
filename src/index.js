import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { OnMouseHover } from './App';
import { NumberCounter, OnSubmit, OnChange } from './App';
import UserProfileCard from './components/UserProfileCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileCard/>
    <OnMouseHover/>
    <OnSubmit/>
    <NumberCounter/>
    <OnChange/>
    <App/>
  </React.StrictMode>
);