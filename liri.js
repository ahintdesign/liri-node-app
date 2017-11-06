// At the top of the liri.js file, write the code you need to grab the data from keys.js. Then store the keys in a variable.
// Make it so liri.js can take in one of the following commands:
// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says


var fs = require("fs");   
var keys = require("./keys.js");
var request = require("request");

var Twitter = require("twitter");    
// var spotify = require("spotify"); 
// var client = new Twitter(keys.twitterKeys); 
var command = process.argv[2];  
var value = process.argv[3]; 



switch (command) {
    case "my-tweets":
        myTwitter();
        }




// my-tweets function
function myTwitter(){
  
  var client = new Twitter({
        consumer_key: keys.consumer_key,
        consumer_secret: keys.consumer_secret,
        access_token_key: keys.access_token_key,
        access_token_secret: keys.access_token_secret
    });

  //Display last 20 Tweets
  var params = {screen_name: 'ab_uncc', count: 20, exclude_replies:true, trim_user:true};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
          //console.log(tweets);
          tweetsArray = tweets;

          for(i=0; i<tweetsArray.length; i++){
            console.log("Created at: " + tweetsArray[i].created_at);
            console.log("Text: " + tweetsArray[i].text);
            console.log('--------------------------------------');
          }
        }
        else{
          console.log(error);
        }
  });

}






// // spotify function             
// function spotify-this-song () {

// }; 


// // movie-this function             
// function spotify-this-song () {

// }; 
