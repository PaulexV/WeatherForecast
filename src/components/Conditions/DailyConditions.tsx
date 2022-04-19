import React from 'react';

const DailyConditions = (props: any) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p> {Math.round(props.responseObj.main.temp)} degrés</p>
                    <p> {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default DailyConditions;