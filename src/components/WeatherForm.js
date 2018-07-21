import React from 'react';

const WeatherForm = ({ onSearch }) => {
    let location

    const onFormSubmit = (e) => {
        e.preventDefault();
        if (location.value.length > 0) {
            onSearch(location.value)
            location.value = ""
        }
    }
    return(
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text" ref={ el => location= el }/>
                <button>Get Weather</button>
            </form>
        </div>
    )
}

export default WeatherForm;

