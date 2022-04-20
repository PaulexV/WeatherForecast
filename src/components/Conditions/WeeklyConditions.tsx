import React from 'react';

const WeeklyConditions = (props: any) => {

    const displayConditions = () => {
        if (props.responseObj.cod === 200) {
            const { daily } = props.responseObj;
            return daily.map((day: any, index: number) => {
                return (
                    <div key={index}>
                        <h2>{day.dt_txt}</h2>
                        <p>Température : {day.temp.day}°C</p>
                        <p>Humidité : {day.humidity}%</p>
                        <p>Précipitation : {day.rain}mm</p>
                        <p>Vent : {day.wind_speed}km/h</p>
                    </div>
                )
            })
        } else {
            return null
        }
    }

    return (
        console.log(props.responseObj),
        displayConditions()
    )
}

export default WeeklyConditions