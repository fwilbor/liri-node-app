//Keys, Modules, and Files required for Liri to Work

require("dotenv").config();

var keys = require("./keys.js");

// var Spotify = require('node-spotify-api');
var Spotify = require('node-spotify-api');

var axios = require("axios");

var moment = require("moment");

var fs = require("fs");

// var spotify = new Spotify({
//     id: '70b41a5fbe9443ab82ba13867d733702',
//     secret: 'd74dd84e408148c59a5ee2983c707e9b'
// });

var spotify = new Spotify(keys.spotify);



console.log(spotify);

var omdb = keys.movies.id;
var bands = keys.bands.id;


//function for determining the command- runs every time that liri runs


//function that calls Spotify

var getSpotify = function (songName) {
    if (songName === undefined) {
        songName = "heal the world";
    }
    spotify.search(
        {
            type: "track",
            query: songName
        },
        function (err, data) {
            if (err) {
                console.log("Error occurred: " + err);
                return;
            }
            var songs = data.tracks.items;

            for (var i = 0; i < songs.length; i++) {
                console.log("Artist: " + songs[i].artists.map(getArtistNames));
                console.log("Song Name: " + songs[i].name);
                console.log("Preview Track: " + songs[i].preview_url);
                console.log("Album: " + songs[i].album.name);

            }

        })
};


var getMyBands = function (artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "08604aa59856ce06c5cda48314b74c4e";
    axios.get(queryURL).then(
        function (response) {
            var jsonData = response.data;
            if (!jsonData.length) {
                console.log("No results found for " + artist);
                return;
            }
            console.log("Upcoming concerts for " + artist + ":");
            for (var i = 0; i < jsonData.length; i++) {
                var show = jsonData[i];
                // Print data about each concert
                // If a concert doesn't have a region, display the country instead
                // Use moment to format the date
                console.log(
                    show.venue.city +
                    "," +
                    (show.venue.region || show.venue.country) +
                    " at " +
                    show.venue.name +
                    " " +
                    moment(show.datetime).format("MM/DD/YYYY")
                );
            }
        }
    );
};

// Function for running a Movie Search
var getMeMovie = function (movieName) {
    if (movieName === undefined) {
        movieName = "Mr Nobody";
    }
    var urlHit =
        "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(urlHit).then(
        function (response) {
            var jsonData = response.data;
            console.log("Title: " + jsonData.Title);
            console.log("Year: " + jsonData.Year);
            console.log("Rated: " + jsonData.Rated);
            console.log("IMDB Rating: " + jsonData.imdbRating);
            console.log("Country: " + jsonData.Country);
            console.log("Language: " + jsonData.Language);
            console.log("Plot: " + jsonData.Plot);
            console.log("Actors: " + jsonData.Actors);
            console.log("Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value);
        }
    );
};

// Function for running a command based on text file
var doWhatItSays = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);
        var dataArr = data.split(",");
        if (dataArr.length === 2) {
            pick(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            pick(dataArr[0]);
        }
    });
};

// Function for determining which command is executed
var pick = function (caseData, functionData) {
    switch (caseData) {
        case "concert-this":
            // getBands(functionData);
            console.log('band stuff');
            break;
        case "spotify-this":

            // getSpotify(functionData);
            console.log('do spotify stuff')
            break;
        case "movie-this":
            // findMoive(functionData);
            console.log('movie stuff');
            break;
        case "do-what-it-says":
            console.log('random stuff');
            // randomText(functionData);
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};
// Function will take in command line arguments and execute correct function accordingly
var runCommand = function (argOne, argTwo) {
    pick(argOne, argTwo);
};
// MAIN PROCESS
// =====================================
runCommand(process.argv[2], process.argv.slice(3).join(" "));









// let caseData = process.argv[2];



// var options = process.argv.slice(3).join(' ');
// console.log(options);





















