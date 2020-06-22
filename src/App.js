import React from 'react';
import './App.scss';
import TrackingMap from './components/TrackingMap';
import Astronauts from './components/Astronauts';

function App() {
    return (
        <div className="App">
            <TrackingMap/>

            <div className="container">
                <Astronauts/>
            </div>
        </div>
    );
}

export default App;
