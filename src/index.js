import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { OnMouseHover } from './App';
import { NumberCounter, OnSubmit, OnChange } from './App';
import UserProfileCard from './components/UserProfileCard';
import SubscriptionData from './components/subscription';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProfileCard/>
    <OnMouseHover/>
    <OnSubmit/>
    <NumberCounter/>
    <OnChange/>
    <App/>
    <SubscriptionData/>
  </React.StrictMode>
);