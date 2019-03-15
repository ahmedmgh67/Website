 //import Fetch, { fetchUrl } from 'fetch';
 
 document.getElementById("userName").innerHTML= getUserName();
 var username = document.getElementById("login-username");
 var password = document.getElementById("login-password");
// var loginBu = document.getElementbyId('btn-login');

/*loginBu.addEventListener('click', function a (){
  alert('login buttton clicked event listener');
  login();
});*/

/*function login (){
  //alert('login buttton clicked function');
  var user = username.value;
  var pass = password.value;

  fetch('https://stacknet-api.herokuapp.com/api/tpa')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data);
    alert("login began")
    // Work with JSON data here
    if (data.username == user){
      window.location("./dashboard.html")
    } else {
      alert("Login Failed");
    }
  })
  .catch(err => {
    // Do something for an error here
  })
  return"Ahmed Gamal";
  
} */
function getUserName () {
  fetch('https://stacknet-api.herokuapp.com/api/sps')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
        //console.log(data);
    //console.log(data);
    a = JSON.parse(data);
    console.log(a.name[0]);
    return a.name;
  })
  .catch(err => {
    // Do something for an error here
    return "error"
  })
  
}