require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);

var Spotify = require('node-spotify-api');

console.log(spotify);


// Grab the axios package...
var axios = require("axios");

//Take in Command Line Argument of Artist Name for Spotify API
var artist = process.argv[2];


// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios
    .get("https://api.spotify.com/v1/artists/{id}" + artist)
    .then(function (response) {
        // If the axios was successful...
        // Then log the body from the site!
        console.log(response.data);
    })
    .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an object that comes back with details pertaining to the error that occurred.
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log("Error", error.message);
        }
        console.log(error.config);
    });






