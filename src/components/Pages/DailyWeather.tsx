import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import classes from '../MainPage/MainPage.module.css';
import Conditions from '../Conditions/Conditions';

const DailyWeather = () => {

    const [responseObj, setResponseObj] = useState({});
    const [city, setCity] = useState('');

    const uriEncodedCity = encodeURIComponent(city);

    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            console.log(place)
            setCity(place.address_components[0].short_name);
        },
        options: {
            types: ["(cities)"],
            componentRestrictions: { country: "fr" },
        },
    });

    function getCurrentForecast(e: any) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY
            }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?&lang=fr&units=metric&q=${uriEncodedCity}`, options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Météo du jour</h1>
            <div>
                <Conditions responseObj={responseObj} />
                <form onSubmit={getCurrentForecast}>
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Enter City"
                        maxLength={255}
                        value={city}
                        className={classes.Input}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className={classes.Button} type="submit">Afficher les conditions météo</button>
                </form>
            </div>
        </div>
    )
}

export default DailyWeather;