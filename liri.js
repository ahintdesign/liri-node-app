// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says


var fs = require("fs");   
var keys = require("./keys.js");
var request = require('request');

var Twitter = require("twitter");    
// var spotify = require("spotify"); 
var client = new Twitter(keys.twitterKeys); 

var command = process.argv[2];  
var value = process.argv[3]; 

switch (command) {
    case "my-tweets":
        myTwitter();
        

}




// // my-tweets function
function myTwitter(){

    var params = {
        screen_name: 'AB-UNCC',
        count: '20',
   
    }

    // this is the call to twitter
    client.get('statuses/user_timeline', params, function(err, timeline, response){
        if(!err){
            for(tweet in timeline){
                //this creates the variable tdate which will store the result of the date from the twitter call for easier access later
                var tDate = new Date(timeline[tweet].created_at);

                //console.log all of the tweets organizing them by tweet# followed by the date of the tweet and finally the text of the tweet itself
                console.log("Tweet #: " + (parseInt(tweet)+1) + " ");
                console.log(tDate.toString().slice(0, 24) + " ");
                console.log(timeline[tweet].text);
                console.log("\n");

                //append all of this information to the txt file 
                fs.appendFile('log.txt', "Tweet #: " + (parseInt(tweet)+1) + "\n");
                fs.appendFile('log.txt', timeline[tweet].text + "\n");
                fs.appendFile('log.txt', "\n");

            }
        } 
    })

}




// // spotify function             
// function spotify-this-song () {

// }; 


// // movie-this function             
// function spotify-this-song () {

// }; 
