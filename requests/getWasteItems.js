const axios = require('axios')
require('dotenv').config()
let cid = process.env.CID
let pid = process.env.PID
let authToken = process.env.AUTHTOKEN
let username = process.env.USERN

function getWasteItems() {

    axios({
        method: "GET",
        url: `https://api.smartwaste.co.uk/v1/${cid}/projects/${pid}/waste-product-types`,
        headers: { 
                    "Content-Type": "multipart/form-data",
                    "Accept" : "application/json",
                    authToken: authToken,
                    username: username
                },
      })
        .then(function (response) {
            response.data.forEach(product => {
                if(product.ewcCode.includes("17")) {
                    console.log(product)
                }
            });      
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

}

getWasteItems()

