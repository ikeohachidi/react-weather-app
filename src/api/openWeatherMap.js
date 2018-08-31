const axios = require("axios")

// this won't work unless the openweathermap user api key is placed in 'PLACE API KEY HERE' without the quotes
const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid='PLACE API KEY HERE'&units=metric"

module.exports = {
    getTemp: function(location) {
        let encodedLocation = encodeURIComponent(location)
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message)  {
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message)
        })
    }
}
