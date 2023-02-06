const axios = require('axios')
const FormData = require('form-data');
require('dotenv').config()

let cid = process.env.CID
let pid = process.env.PID
let authToken = process.env.AUTHTOKEN
let username = process.env.USERN

function saveWasteItem(body) {

    let formData = new FormData()
    formData.append("wasteItem", JSON.stringify(body))

axios({
    method: "post",
    url: `https://api.smartwaste.co.uk/v1/${cid}/projects/${pid}/waste-items`,
    data: formData,
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

};

module.exports = { saveWasteItem }