import React from 'react';

const WeatherMessage = ({ location, temp }) => {
    return(
        <div>
            <h3> its {temp} in {location} </h3>
        </div>
    )
}

export default WeatherMessage;