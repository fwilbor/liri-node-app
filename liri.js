require("dotenv").config();

var keys = require("./keys.js");


var fs = require("fs");



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

function movieInfo(parameter) {


    var findMovie;
    if (parameter === undefined) {
        findMovie = "Mr. Nobody";
    } else {
        findMovie = parameter;
    };

    var queryUrl = "http://www.omdbapi.com/?t=" + findMovie + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (err, res, body) {
        var bodyOf = JSON.parse(body);
        if (!err && res.statusCode === 200) {
            logIt("\n---------------------------------------------------\n");
            logIt("Title: " + bodyOf.Title);
            logIt("Release Year: " + bodyOf.Year);
            logIt("IMDB Rating: " + bodyOf.imdbRating);
            logIt("Rotten Tomatoes Rating: " + bodyOf.Ratings[1].Value);
            logIt("Country: " + bodyOf.Country);
            logIt("Language: " + bodyOf.Language);
            logIt("Plot: " + bodyOf.Plot);
            logIt("Actors: " + bodyOf.Actors);
            logIt("\n---------------------------------------------------\n");
        }
    });
};

movieInfo();





function getRandom() {
    fs.readFile('random.txt', "utf8", function (error, data) {

        if (error) {
            return logIt(error);
        }


        var dataArr = data.split(",");

        if (dataArr[0] === "spotify-this-song") {
            var songcheck = dataArr[1].trim().slice(1, -1);
            spotSong(songcheck);
        }
        else if (dataArr[0] === "concert-this") {
            if (dataArr[1].charAt(1) === "'") {
                var dLength = dataArr[1].length - 1;
                var data = dataArr[1].substring(2, dLength);
                console.log(data);
                bandsInTown(data);
            }
            else {
                var bandName = dataArr[1].trim();
                console.log(bandName);
                bandsInTown(bandName);
            }

        }
        else if (dataArr[0] === "movie-this") {
            var movie_name = dataArr[1].trim().slice(1, -1);
            movieInfo(movie_name);
        }

    });

};

getRandom();








