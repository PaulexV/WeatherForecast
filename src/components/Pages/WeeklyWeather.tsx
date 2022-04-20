import React, { useState, useEffect } from 'react';
import WeeklyConditions from '../Conditions/WeeklyConditions';
import { usePlacesWidget } from 'react-google-autocomplete';
import classes from '../MainPage/MainPage.module.css';

const WeeklyWeather = () => {

    const [responseObj, setResponseObj] = useState({});
    const [city, setCity] = useState('');
    const [lat, setLat] = useState('');
    const [lng, setLng] = useState('');

    const { ref } = usePlacesWidget({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        onPlaceSelected: (place) => {
            setCity(place.address_components[0].short_name);
            setLat(place.geometry.location.lat());
            setLng(place.geometry.location.lng());
        },
        options: {
            types: ["(cities)"],
            componentRestrictions: { country: "fr" },
        },
    });

    async function getWeeklyForecast(e: any) {
        e.preventDefault();
        const options = {
            method: 'GET',
        };

        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=current,hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY
            }`, options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err))
            ;
    };

    return (
        <div>
            <h1>Météo de la semaine</h1>
            <WeeklyConditions responseObj={responseObj} />
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