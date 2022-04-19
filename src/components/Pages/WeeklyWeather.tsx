import React, { useState, useEffect } from 'react';
import Conditions from '../Conditions/Conditions';
import { usePlacesWidget } from 'react-google-autocomplete';
import classes from '../MainPage/MainPage.module.css';

const WeeklyWeather = () => {

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

    function getWeeklyForecast(e: any) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': process.env.REACT_APP_WEATHER_API_KEY
            }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${uriEncodedCity}&lang=fr&units=metric`, options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err))
            ;
    };

    return (
        <div>
            <h1>Météo de la semaine</h1>
            <Conditions responseObj={responseObj} />
            <div>
                <form onSubmit={getWeeklyForecast}>
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

export default WeeklyWeather;