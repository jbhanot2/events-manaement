import React, {Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
const EventForm = React.lazy(() => import('./components/eventsForm'));
const EventsListing = React.lazy(() => import('./components/eventsListing'));

function App() {
  return (
    <div className="App container">
        <Suspense fallback={<div>Loading...</div>}>
            <h1 className="title">Event Management app</h1>
            <EventForm/>      
            <EventsListing/>
        </Suspense>
      </div>
  );
}

export default App;
