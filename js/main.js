import * as Util from './util.js';
const handleStartClick = () => {
  $('#start-button').remove();
  if (sessionStorage.accessToken){
    $('.body').append('<div>hi</div>');
    return $.ajax({
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.accessToken
      }
    }).then((response)=>{
      sessionStorage.setItem('userPlaylists', JSON.stringify(Util.playlistMapping(response)));
      });
  }else{
    $('.body').append('<div>hi - no token</div>');
  }
};


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
