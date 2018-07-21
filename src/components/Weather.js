import React from 'react';

import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import openWeatherMap from '../api/openWeatherMap'

class Weather extends React.Component {
    constructor() {
        super()
        this.handleSearch = this.handleSearch.bind(this)
        this.state = { isLoading: false }
    }
    handleSearch(location) {   
        let that = this;

        this.setState({ isLoading: true })
        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function(errorMessage) {
            that.setState({
                isLoading: false
            })
            alert(errorMessage)
        })
    }
    render() {
        let { isLoading, location, temp } = this.state

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching Weather..</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        return (
            <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                { renderMessage() }
            </div>
        )
    }
}

export default Weather;