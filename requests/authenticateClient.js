const axios = require('axios')
require('dotenv').config()

let public = process.env.PUBL
let token = process.env.TOKEN
let hash = process.env.HASH

function authenticateClient() {
    axios({
        method: "GET",
        url: `https://api.smartwaste.co.uk/v1/authenticate/${public}?token=${token}&password=${hash}`,
        headers: { 
                    "Accept" : "application/json",
                },
      })
      .then(function (response) {
        //handle success
        console.log(response.data.token)
        return response.data.authToken
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });

      
}

module.exports = { authenticateClient };




