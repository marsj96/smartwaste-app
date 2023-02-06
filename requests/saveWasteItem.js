const axios = require('axios')

function saveWasteItem() {

axios({
    method: "post",
    url: `https://api.smartwaste.co.uk/v1/${cid}/projects/${volumePid}/waste-items`,
    data: bodyFormData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (response) {
      //handle success
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });

};