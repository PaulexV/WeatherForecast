import React, { useState, useEffect } from 'react';
import Autocomplete from '../Autocomplete/Autocomplete';
import Conditions from '../Conditions/Conditions';
import { useParams } from 'react-router-dom';

function WeeklyWeather() {

    let [responseObj, setResponseObj] = useState({});
    const { city } = useParams();
    useEffect(() => {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com',
                'X-RapidAPI-Key': '2166254f35msh011e417047c5104p11ac9fjsn3675a69f1dc6'
            }
        };

        fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&lang=fr&units=metric`, options)
            .then(response => response.json())
            .then(response => setResponseObj(response))
            .catch(err => console.error(err))
            ;
    }, []);

    return (
        <div>
            <h1>Météo de la semaine</h1>
            <div>
                <Autocomplete />
                <Conditions responseObj={responseObj} />
            </div>
        </div>
    )
}

export default WeeklyWeather;