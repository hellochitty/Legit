# Legit

[Legit live](http://legit.hahaha.cool/)

Legit is a Spotify powered quiz app that will test you on whether or not you know your favorite songs. By integrating with your Spotify account, Legit will pull in your public playlists with at least 20 songs. You can then select from these playlists to play the game. The game's difficulty levels span from pedestrian(5 seconds of a song played) to masochistic(0.25 seconds of a song played). 10 songs will be played for the difficulty duration you have chosen. Let's see if you get any right. Are you legit?

Legit is built using javascript and jquery, with an Express server to handle OAuth2.0 requests.


## Functionality Flow
1. The playlist are customized for each Spotify user after they log-in to the app and authorize it to view their playlists.
![Auth Screenshot](/assets/auth.png)

2. User playlists with greater than 20 songs are loaded, with their album art being displayed for the user to select from
![Playlist Selection](/assets/playlists.png)

3. The user is now able to hear snippets of 10 songs in sequence, and asked to identify these songs. Note: it was a design decision to not allow the user to replay the track. We want the user to guess the song based on what they heard and we feel it would be too easy if the user can keep replaying the track

#### Play
![Play](/assets/play.png)
#### Answer
![Answer](/assets/answer.png)

4. At the end of the game, the user is able to see the number they answered correctly, and also return to the playlist selection screen to play a new game.

## Implementation Highlights

### Express Server
The express server was quite simple, the port depends on whether or not the app is being run in production or development:
```javascript
var express = require('express'); // Express web server framework
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname));
app.listen(port);
```

### Get User Playlists
Getting the user's playlists requires determining whether or not a user is signed in and then sending an ajax request to get their playlists. The relevant information is then pulled out from the resulting response:
```javascript
//get userPlaylists if user signed in
if (sessionStorage.accessToken){
  $.ajax({
    url: 'https://api.spotify.com/v1/me/playlists',
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.accessToken
    }
  }).then((response)=>{
    userPlaylists = Util.playlistMapping(response);
  });
}
//playlist mapping
export const playlistMapping = response => {
  let result = [];
  response.items.forEach((el) => {
    if(el.tracks.total > 20){
      result.push(
        {
          id: el.id,
          image: el.images[0].url,
          name: el.name,
          url: el.tracks.href
        }
      );
    }
  });
  return result;
};
```
