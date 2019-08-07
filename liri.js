//Keys, Modules, and Files required for Liri to Work

require("dotenv").config();

var keys = require("./keys.js");


var fs = require("fs");


// var Spotify = require('node-spotify-api');
var Spotify = require('node-spotify-api');

var axios = require("axios");

var moment = require("moment");


var spotify = new Spotify({
    id: '70b41a5fbe9443ab82ba13867d733702',
    secret: 'd74dd84e408148c59a5ee2983c707e9b'
});


console.log(spotify);

var omdb = keys.movies.id;
var bands = keys.bands.id;


//function for determining the command- runs every time that liri runs

let caseData = process.argv[2];

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
        console.log("This will Run if nothing else does");

}

var options = process.argv.slice(3).join(' ');
console.log(options);

//Take in Command Line Argument for "Song Name" for Spotify API

function song(options) {
    var stringWithSpaces = options;
    var SongName = "";
    var newArray = []


    var songName = ""

    for (i = 0; i < res.length - 1; i++) {

        songName = songName + res[i] + "+"

    }



    console.log(songName)


    // for (var i = 3; i < commandLine.length; i++) {
    //     if (i > 3 && i < commandLine.length) {
    //         SongName = SongName + "+" + commandLine[i];
    //     }
    //     else {
    //         SongName += commandLine[i];
    //     }
    // }

    var Spotify = require('node-spotify-api');
    var spotify = new Spotify({
        id: '70b41a5fbe9443ab82ba13867d733702',
        secret: 'd74dd84e408148c59a5ee2983c707e9b'
    });

    // helper function that grabs artist name
    var getArtistNames = function (artist) {
        return artist.name;
    };


    var getSpotify = function (songName) {
        if (songName === undefined) {
            songName = "What's love got to do with it?"
        }
    };

    spotify.search({ type: 'track', query: SongName }, function (err, data) {
        if (err) {
            console.log("Error occurred: " + err);
            return;
        }

        var songs = data.tracks.items;

        for (var i = 0; i < songs.length; i++) {
            console.log("artists " + songs[i].artists.map(getArtistNames));
            console.log("Song Title:" + songs[i].name);
            console.log("Preview Track: " + songs[i].preview_url);
            console.log("Album: " + songs[i].album.name);
            console.log("-----------------------------------------------------------");

        }
    });
}

// song();

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

// movieInfo();




//function for running a command based on text file
var readText = function () {
    fs.readFile("random.txt", "utf8", function (error, data) {
        console.log(data);
        var dataArr = data.split(",");
        if (dataArr.length === 2) {
            chooseCommand(dataArr[0], dataArr[1]);
        } else if (dataArr.lenth === 1) {
            chooseCommand(dataArr[0]);
        }
    }
    )
}





//     fs.readFile('random.txt', "utf8", function (error, data) {

//         if (error) {
//             return logIt(error);
//         }


//         var dataArr = data.split(",");

//         if (dataArr[0] === "spotify-this-song") {
//             var songcheck = dataArr[1].trim().slice(1, -1);
//             spotSong(songcheck);
//         }
//         else if (dataArr[0] === "concert-this") {
//             if (dataArr[1].charAt(1) === "'") {
//                 var dLength = dataArr[1].length - 1;
//                 var data = dataArr[1].substring(2, dLength);
//                 console.log(data);
//                 bandsInTown(data);
//             }
//             else {
//                 var bandName = dataArr[1].trim();
//                 console.log(bandName);
//                 bandsInTown(bandName);
//             }

//         }
//         else if (dataArr[0] === "movie-this") {
//             var movie_name = dataArr[1].trim().slice(1, -1);
//             movieInfo(movie_name);
//         }

//     });

// };

// // getRandom();








