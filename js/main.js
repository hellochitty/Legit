import * as Util from './util.js';
const handleStartClick = () => {
  debugger;
  return $.ajax({
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': 'Bearer ' + window.accessToken
      },
      success: function(response) {
        debugger;
      }
  });
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

 $('#start-button').click(handleStartClick).then(()=>{debugger;});

});
