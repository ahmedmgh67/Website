const axios = require('axios')

'use strict';

var div = document.getElementById("JS-Loader");

var ahmed = "Campaign";

function getRequests  ()async {
  try {
    return await axios.get('http://stacknet-api.herokuapp.com/api/requests')
  } catch (error) {
    console.error(error)
  }
}

div.addEventListener("load", function (){
    getRequests(); 
    
});