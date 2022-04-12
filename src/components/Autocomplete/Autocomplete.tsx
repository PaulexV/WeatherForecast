import React, { useState } from 'react';
import { usePlacesWidget } from 'react-google-autocomplete';
import classes from '../Forecast/Forecast.module.css';

const Autocomplete = () => {

    const [city, setCity] = useState('');

    const { ref } = usePlacesWidget({
        apiKey: 'AIzaSyC5q6Skc08VkrxISKke2lwN7bRmhRJTZUQ',
        onPlaceSelected: (place) => {
            console.log(place)
            setCity(place.address_components[0].short_name);
        },
        options: {
            types: ["(cities)"],
            componentRestrictions: { country: "fr" },
        },
    });

    return (
        <div>
            <form>
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
    )
}

export default Autocomplete;