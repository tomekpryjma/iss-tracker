import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Astronaut from './Astronaut';

export default function Astronauts() {
    const [astronauts, setAstronauts] = useState([]);

    useEffect(() => {
        axios.get('http://api.open-notify.org/astros.json').then(response => {
            setAstronauts(response.data.people);
        });
    }, []);

    useEffect(() => {
    }, [astronauts])

    return(
        <div id="astronauts-wrapper">
            <h2>Humans in space right now</h2>
            
            <div id="astronauts">
                {
                    astronauts.map((astronaut, key) => {
                        return(
                            <Astronaut key={key} name={astronaut.name}/>
                        );
                    })
                }
            </div>
        </div>
    );
}