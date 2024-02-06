const axios = require('axios'); // legacy way

const getWeather=(lat,lon)=>{
    return new Promise((resolve, reject)=>{
        const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=metric&appid=8115b301fed94e9bed79997454f21f48'
           // Make a request for a user with a given ID
            axios.get(url)
            .then(function (response) {
                // handle success
                //console.log(response.data.main.temp);
                // handle success
                resolve({weather: response.data.main.temp});
            })
            .catch(function (error) {
                // handle error
                reject({error: 'Unable to find the location'});
                //console.log("Unable to find the location");
            });

    });

}

module.exports = getWeather

