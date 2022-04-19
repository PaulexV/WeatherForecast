import React from 'react';

const WeeklyConditions = (props: any) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                props.responseObj.daily.map((day: any, index: number) => {
                    if (index > 0) {
                        <div key={index}>
                            <h2>{day.dt_txt}</h2>
                            <p>{day.weather[0].description}</p>
                            <p>Température : {day.temp.day}°C</p>
                            <p>Humidité : {day.humidity}%</p>
                            <p>Pression : {day.pressure}</p>
                        </div>
                    }
                })
                : null
            }
        </div>
    )
}

export default WeeklyConditions