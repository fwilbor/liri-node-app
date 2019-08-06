require("dotenv").config();

var keys = require("./keys.js");

// var Spotify = require('node-spotify-api');
var Spotify = require('spotify-web-api-js');

var spotify = new Spotify();


console.log(spotify);


//Take in Command Line Argument of Artist Name for Spotify API
var artist = process.argv[2];

spotify.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
    .then(function (data) {
        console.log('Artist information', data);
    }, function (err) {
        console.error(err);
    });







