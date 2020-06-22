import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import iss from '../images/iss.svg';
import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '100%'
};
const defaultCenter = {
    lat: 41.3851, lng: 2.1734
}
const defaultTimeOffset = 5000;

export default function TrackingMap() {
    const [issPosition, setIssPosition] = useState(defaultCenter);

    useEffect(() => {
        getIssPosition();
        setInterval(getIssPosition, defaultTimeOffset);
    }, []);

    const getIssPosition = () => {
        axios.get('http://api.open-notify.org/iss-now.json').then(response => {
            const issPosition = response.data.iss_position;

            setIssPosition({
                lat: parseFloat(issPosition.latitude),
                lng: parseFloat(issPosition.longitude)
            })
        });
    }

    return(
        <div id="map">
            <LoadScript googleMapsApiKey="AIzaSyAQMnQ9vDGALcXRTezqbww4Kk0jxdBBTHk">
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={4}
                    center={issPosition}>
                    
                    <Marker
                        position={issPosition}
                        icon={{
                            url: iss,
                            scaledSize: { width: 120, height: 120},
                            anchor: {x: 60, y: 70}
                        }}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
}