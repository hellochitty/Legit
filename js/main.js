import * as Util from './util.js';
$(() => {
let backgrounds = [
    'linear-gradient(0deg, #191414, #F0401C)',
    'linear-gradient(0deg, #191414, #1C51C7)',
    'linear-gradient(0deg, #191414, #619406)',
    'linear-gradient(0deg, #191414, #F01F59)'
  ];
  Util.shuffle(backgrounds);
  $('body').css('background', backgrounds[0]);

 $('#guest-login-button').click(() => {
   $('#login').hide();
   $('#loggedin').show();
 });

 $('#start-button').click(handleStartClick);

});

let userPlaylists;
let duration = 0;
let level;

const handleStartClick = () => {
  $('#start-button').remove();
  //get userPlaylists if user signed in
  if (sessionStorage.accessToken){
    console.log('non-guest');
    $.ajax({
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.accessToken
      }
    }).then((response)=>{
      userPlaylists = Util.playlistMapping(response);
      console.log(userPlaylists);
      // sessionStorage.setItem('userPlaylists', JSON.stringify(Util.playlistMapping(response)));
    });
  }

  console.log('help');
  $('.body').append(addDifficultySettings());
  $('.settings').show('slow');
  $(".difficulty").click(handleDifficultyClick);
};


const addDifficultySettings = () => {
  return (
    `<div class="settings hidden">
      <h3>difficulty</h3>
      <div class="settings-difficulty">
        ${Util.divMapper("difficulty button", ["Pedestrian", "Mediocre", "Tough", "Insane", "Masochistic" ])}
      </div>
    </div>`);
};

const addPlaylistSettings = () => {
  if (userPlaylists){
    //
  }
};

//add difficulty click handler
const handleDifficultyClick = (e) => {
  level = e.currentTarget.textContent;
  console.log(level);
  duration = Util.durationMapping(level);
  console.log(duration);
  $(e.currentTarget).parent().parent().remove();
};
