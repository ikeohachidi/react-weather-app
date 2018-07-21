const axios = require("axios")

const OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5/weather?appid=c7f42dff99a576f1eab8a55f0f7f1411&units=metric"

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