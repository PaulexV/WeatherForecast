import React from 'react';

const Conditions = (props: any) => {
    return (
        <div>
            {props.responseObj.cod === 200 ?
                <div>
                    <p> {Math.round(props.responseObj.main.temp)} degrés,  {props.responseObj.weather[0].description}.</p>
                </div>
                : null
            }
        </div>
    )
}

export default Conditions;