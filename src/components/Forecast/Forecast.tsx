import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';

const Forecast = () => {

    const [city, setCity] = useState('');
    const [responseObj, setResponseObj] = useState({});

    const { ref } = usePlacesWidget({
        apiKey: 'AIzaSyC5q6Skc08VkrxISKke2lwN7bRmhRJTZUQ',
        onPlaceSelected: (place) => {
            setCity(place.address_components[0].short_name);
        },
        options: {
            types: ["(cities)"],
            componentRestrictions: { country: "fr" },
            fields: ['address_components.short_name']
        },
    });

    const uriEncodedCity = encodeURIComponent(city);

    function getCurrentForecast(e: any) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '2166254f35msh011e417047c5104p11ac9fjsn3675a69f1dc6'
            }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?&lang=fr&units=metric&q=${uriEncodedCity}`, options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>Conditions météo actuelles</h2>
            <div>
                <Conditions responseObj={responseObj} />
            </div>
            <form onSubmit={getCurrentForecast}>
                <input
                    ref={ref}
                    type="text"
                    placeholder="Enter City"
                    maxLength={50}
                    value={city}
                    className={classes.Input}
                    onChange={(e) => setCity(e.target.value)}
                />
                <button className={classes.Button} type="submit">Afficher les conditions météo</button>
            </form>
        </div>
    )
}

export default Forecast;
