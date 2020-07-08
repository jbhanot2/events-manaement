import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventForm from './components/eventsForm';
import EventsListing from './components/eventsListing';

function App() {
  return (
    <div className="App container">
        <h1 className="title">Event Management app</h1>
        <EventForm/>
        <EventsListing/>
      </div>
  );
}

export default App;
