import React from 'react';

const Conditions = (props: any) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p><strong>{props.responseObj.name}</strong></p>
                    <p>Il fait actuellement {Math.round(props.responseObj.main.temp)} degrés, et le temps est {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;