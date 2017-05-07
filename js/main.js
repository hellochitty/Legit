import * as Util from './util.js';
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);


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
