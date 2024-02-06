const axios = require('axios'); // legacy way
const location = 'London';

const getGeo=(location)=>{
    return new Promise((resolve, reject)=>{

        const url = 'http://api.openweathermap.org/geo/1.0/direct?q='+location+'&limit=5&appid=8115b301fed94e9bed79997454f21f48'

// Make a request for a user with a given ID
            axios.get(url)
            .then(function (response) {
                // handle success
                //console.log(response.data[0].name+ " is in "+response.data[0].lat+" "+response.data[0].lon);
                resolve({
                    name:response.data[0].name,
                    lat:response.data[0].lat,
                    lon:response.data[0].lon
                });
            })
            .catch(function (error) {
                // handle error
                //console.log(error);
                reject({error: 'Check the Location'});
            });
   
    });

}

module.exports = getGeo
