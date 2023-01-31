const axios = require('axios').default;
require('dotenv').config()

const apiKey = process.env.APIKEY
const spreadsheetId = process.env.SSID
const url = "https://sheets.googleapis.com"


axios.get(`${url}/v4/spreadsheets/${spreadsheetId}`)
.then(function (response) {
    console.log(response.data)
})
.catch(function (error) {
    console.log(error)
})

