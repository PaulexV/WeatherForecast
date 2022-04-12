import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Conditions from '../Conditions/Conditions';
import classes from './Forecast.module.css';



const Forecast = () => {

    let [city, setCity] = useState('');
    let [unit, setUnit] = useState('metric');
    let [responseObj, setResponseObj] = useState({});

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

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?&lang=fr&units=${unit}&q=${uriEncodedCity}`, options)
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
                    type="text"
                    placeholder="Enter City"
                    maxLength={50}
                    value={city}
                    className={classes.Input}
                    onChange={(e) => setCity(e.target.value)}
                />
                
                <Link className={classes.Link} to="/cards">
                    <button className={classes.Button} type="submit">Afficher les conditions météo</button>
                </Link>
            </form>
        </div>
    )
}

export default Forecast;
