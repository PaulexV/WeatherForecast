import React, { useState } from 'react';

const Forecast = () => {

    const [responseObj, setResponseObj] = useState({});

    function getCurrentForecast() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '2166254f35msh011e417047c5104p11ac9fjsn3675a69f1dc6'
            }
        };

        fetch('https://community-open-weather-map.p.rapidapi.com/weather?q=Bordeaux', options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h2>Conditions météo actuelles</h2>
            <div>
                {JSON.stringify(responseObj)}
            </div>
            <button onClick={getCurrentForecast}>Get Current Forecast</button>
        </div>
    )
}

export default Forecast;