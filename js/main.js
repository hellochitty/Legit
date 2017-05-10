import * as Util from './util.js';

$(() => {
let backgrounds = [
    'linear-gradient(0deg, #191414, #F5561D)',
    'linear-gradient(0deg, #191414, #2575FC)',
    'linear-gradient(0deg, #191414, #0CD63C)',
    'linear-gradient(0deg, #191414, #FF215F)'
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
let songs;
let questions;
let currentQuestion;
let answers;
let numRight = 0;
let playlistImage;

const handleStartClick = () => {
  $('#start-button').remove();
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
  $('.body').append(difficultySettings());
  $('.settings').fadeIn(500);
  $(".difficulty").click(handleDifficultyClick);
};


const difficultySettings = () => {
  return (
    `<div class="settings hidden">
      <h3>Difficulty:</h3>
      <div class="settings-difficulty">
        ${Util.divMapper("difficulty button", ["Pedestrian", "Mediocre", "Tough", "Insane", "Masochistic" ])}
      </div>
    </div>`);
};

const addPlaylistSettings = () => {
  $('.body').append(`<h3 class="label">Choose a playlist:<h3><div class="playlists hidden"></div>`);
  if (userPlaylists){
    $('.playlists').append(Util.playlistMapper("user-playlist",userPlaylists));
    $('.user-playlist').click(handleUserPlaylistClick);
  }
  $('.playlists').append(Util.defaultPlaylists());
  $('.default-playlist').click(handleDefaultPlaylistClick);
  $('.playlists').fadeIn(500);
};



const handleDifficultyClick = (e) => {
  level = e.currentTarget.textContent;
  duration = Util.durationMapping(level);
  $(e.currentTarget).parent().parent().remove();
  addPlaylistSettings();
};

const handleUserPlaylistClick = (e) => {
  playlistImage = e.currentTarget.children[0].src;
  $.ajax({
    url: e.currentTarget.attributes.url.value,
    headers: {
      'Authorization': 'Bearer ' + sessionStorage.accessToken
    }
  }).then((response)=>{
    songs = Util.validSongs(response.items);
    handlePlaylistSelection();
  });
};

const handleDefaultPlaylistClick = (e) => {
  songs = Util.playlistToSongsMapping(e.currentTarget.attributes.name.value);
  handlePlaylistSelection();
};

const handlePlaylistSelection = () => {
  $('.label').fadeOut(300, function(){ $(this).remove();});
  $('.playlists').fadeOut(300, function(){ $(this).remove();});
  Util.shuffle(songs);
  questions = songs.slice(0,10);
  currentQuestion = questions.shift();
  $('.body').append("<div id='myProgress'><div id='myBar'></div></div>");
  $('.body').append(
    `<div class="hidden" id='question'>
      <img class="chosen-playlist" src=${playlistImage} />
      <div class="audio-answers"></div>
    </div>`);
  $('#question').fadeIn(500);
  showQuestion(currentQuestion);
};

const showQuestion = (question) => {
  var buttonAudio = $(`<div class="button-audio hidden">
    <div id="play"><i class="fa fa-play fa-3x play-icon" aria-hidden="true"></i></div>
    <audio id="audio" src=${question.url}/>
  </div>`);
  $('.audio-answers').append(buttonAudio);
  $('.button-audio').fadeIn(500);
  answers = getOtherAnswers(question);
  buttonAudio.click(play);
  var audio = document.getElementById("audio");
  $(audio).on("timeupdate", () => {
    if (audio.currentTime > duration){
      audio.pause();
      audio.remove();
    }
  });
};

const getOtherAnswers = (question) => {
  let holder = [question.name];
  Util.shuffle(songs);
  let i = 0;
  while(holder.length < 4){
    if (songs[i].name !== question.name){
      holder.push(songs[i].name);
    }
    i++;
  }
  return Util.shuffle(holder);
};

const htmlAnswers = (answrs) => {
  return (
    `<div class="button answer">${answrs[0]}</div>
    <div class="button answer">${answrs[1]}</div>
    <div class="button answer">${answrs[2]}</div>
    <div class="button answer">${answrs[3]}</div>`
  );
};

const handleAnswerClick = (e) => {
  $('.answer').unbind();
  var audio = document.getElementById("audio");
  if (audio){
    audio.pause();
    audio.remove();
  }


  $('#myBar').animate({ width: "+=10%" }, 500 );
  $("div").filter(function() {
    return $(this).text() === currentQuestion.name;
  }).css("transform", "scale(1.8)");
  if (e.currentTarget.textContent === currentQuestion.name){
    numRight += 1;
  } else{
    $("div").filter(function() {
      return $(this).text() === e.currentTarget.textContent;
    }).css("text-decoration", "line-through");
  }
  setTimeout(()=> {
    $('.answer').remove();
    if (questions.length > 0){
      currentQuestion = questions.shift();
      showQuestion(currentQuestion);
    }else{
      $('.audio-answers').append(`<h3>${numRight}/10 right!</h3>`);
      $('.audio-answers').append(`<div class="button play-again">Play Again</div>`);
      $('.play-again').click(handlePlayAgain);

    }
  },1500);
};

const handlePlayAgain = () => {
  $('#myProgress').remove();
  $('h3').remove();
  $('.play-again').remove();
  $('.chosen-playlist').remove();
  numRight = 0;
  $('.body').append(difficultySettings());
  $('.settings').fadeIn(500);
  $(".difficulty").click(handleDifficultyClick);
};
// $("#play").click(play());
// $( "#play" ).on("click", () => {
//   play();
// });

const play = () => {
  var audio = document.getElementById("audio");
  audio.play();
  $( "#play" ).remove();
  $('.audio-answers').append(htmlAnswers(answers));
  $('.answer').on('click', (e) => handleAnswerClick(e));
};
