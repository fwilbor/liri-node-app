require("dotenv").config();

var keys = require("./keys.js");

// var Spotify = require('node-spotify-api');
var Spotify = require('node-spotify-api');


var spotify = new Spotify({
    id: '70b41a5fbe9443ab82ba13867d733702',
    secret: 'd74dd84e408148c59a5ee2983c707e9b'
});


console.log(spotify);




//Take in Command Line Argument for "Song Name" for Spotify API

function song() {
    var commandLine = process.argv;
    var SongName = "";
    for (var i = 2; i < commandLine.length; i++) {
        if (i > 2 && i < commandLine.length) {
            SongName = SongName + "+" + commandLine[i];
        }
        else {
            SongName += commandLine[i];
        }
    }

    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: '70b41a5fbe9443ab82ba13867d733702',
        secret: 'd74dd84e408148c59a5ee2983c707e9b'
    });


    spotify.search({ type: 'track', query: SongName, limit: 10 }, function (err, data) {
        if (err) {
            SongName = "";
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
            song();
        }

        for (var i = 0; i < data.tracks.items.length; i++) {
            var songData = data.tracks.items[i];
            console.log("Artist: " + songData.artists[0].name);
            console.log("Song Title: " + songData.name);
            console.log("Preview Track: " + songData.preview_url);
            console.log("Album: " + songData.album.name);
        }
    });
}

song();







