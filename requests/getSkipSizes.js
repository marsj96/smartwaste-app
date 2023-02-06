const axios = require('axios')
require('dotenv').config()
let cid = process.env.CID
let pid = process.env.PID
let authToken = process.env.AUTHTOKEN
let username = process.env.USERN

function getSkipSizes() {

    axios({
        method: "GET",
        url: `https://api.smartwaste.co.uk/v1/${cid}/projects/${pid}/skip-sizes`,
        headers: { 
                    "Content-Type": "multipart/form-data",
                    "Accept" : "application/json",
                    authToken: authToken,
                    username: username
                },
      })
        .then(function (response) {
          //handle success
          console.log(response.data);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

}

getSkipSizes()