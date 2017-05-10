/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__songs_all_out_00s_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__songs_all_out_90s_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__songs_all_out_80s_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__songs_all_out_70s_js__ = __webpack_require__(3);






const shuffle = (array) => {
  let i = 0;
  let j = 0;
  let temp = null;

  for (i = array.length -1; i > 0; i -= 1){
    j= Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = shuffle;



const divMapper = (className, array) => {
  return array.map((el) => `<div class=${"'"}${className}${"'"}>${el}</div>`).join("");
};
/* harmony export (immutable) */ __webpack_exports__["c"] = divMapper;


const playlistMapper = (className, playlists) => {
  return playlists.map( playlist => {
    return `<div class=${"'"}${className} img-wrap ${"'"} url=${playlist.url}>
      <img class="playlist-image" src=${playlist.image} />
      <p class="playlist-description">${playlist.name}</p>
    </div>`;
    }).join("");
};
/* harmony export (immutable) */ __webpack_exports__["d"] = playlistMapper;



const durationMapping = lvl => {
  switch (lvl){
    case 'Pedestrian':
      return 5;
    case 'Mediocre':
      return 3;
    case 'Tough':
      return 1;
    case 'Insane':
      return 0.5;
    case 'Masochistic':
      return 0.25;
  }
};
/* harmony export (immutable) */ __webpack_exports__["f"] = durationMapping;


const playlistMapping = response => {
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
/* harmony export (immutable) */ __webpack_exports__["b"] = playlistMapping;


const validSongs = items => {
  const validSongsArray = [];
  items.forEach((item) => {
    if(item.track.preview_url){
      validSongsArray.push({
        url: item.track.preview_url,
        name: item.track.name
      });
    }
  });
  return validSongsArray;
};
/* harmony export (immutable) */ __webpack_exports__["g"] = validSongs;


const playlistToSongsMapping = pl => {
  switch (pl){
    case 'allOutThousands':
      return __WEBPACK_IMPORTED_MODULE_0__songs_all_out_00s_js__["a" /* songs */];
    case 'allOutNineties':
      return __WEBPACK_IMPORTED_MODULE_1__songs_all_out_90s_js__["a" /* songs */];
    case 'allOutEighties':
      return __WEBPACK_IMPORTED_MODULE_2__songs_all_out_80s_js__["a" /* songs */];
    case 'allOutSeventies':
      return __WEBPACK_IMPORTED_MODULE_3__songs_all_out_70s_js__["a" /* songs */];
  }
};
/* harmony export (immutable) */ __webpack_exports__["h"] = playlistToSongsMapping;


const defaultPlaylists = () => {
  return (
    `<div class="default-playlist img-wrap" name="allOutThousands">
      <img class="playlist-image" src="https://i.scdn.co/image/2b24acba836cb2614b0c8457dd7598d12bd3f385" />
      <p class="playlist-description">All Out Thousands</p>
    </div>
    <div class="default-playlist img-wrap" name="allOutNineties">
      <img class="playlist-image" src="https://i.scdn.co/image/6713281af175a1da925550f7fb6bd7a90663e15e" />
      <p class="playlist-description">All Out Nineties</p>
    </div>
    <div class="default-playlist img-wrap" name="allOutEighties">
      <img class="playlist-image" src="https://i.scdn.co/image/75d3201b28bcf198fa250af78aa6e650e7702189" />
      <p class="playlist-description">All Out Eighties</p>
    </div>
    <div class="default-playlist img-wrap" name="allOutSeventies">
      <img class="playlist-image" src="https://i.scdn.co/image/bc0bcc13e4a80a3845d9d3231359dd3cb7d897b5" />
      <p class="playlist-description">All Out Seventies</p>
    </div>`
  );
};
/* harmony export (immutable) */ __webpack_exports__["e"] = defaultPlaylists;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(0);


$(() => {
let backgrounds = [
    'linear-gradient(0deg, #191414, #F5561D)',
    'linear-gradient(0deg, #191414, #2575FC)',
    'linear-gradient(0deg, #191414, #0CD63C)',
    'linear-gradient(0deg, #191414, #FF215F)'
  ];
  __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* shuffle */](backgrounds);
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
    console.log('non-guest');
    $.ajax({
      url: 'https://api.spotify.com/v1/me/playlists',
      headers: {
        'Authorization': 'Bearer ' + sessionStorage.accessToken
      }
    }).then((response)=>{
      userPlaylists = __WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* playlistMapping */](response);
      console.log(userPlaylists);
      // sessionStorage.setItem('userPlaylists', JSON.stringify(Util.playlistMapping(response)));
    });
  }
  $('.body').append(difficultySettings());
  $('.settings').fadeIn(500);
  $(".difficulty").click(handleDifficultyClick);
};


const difficultySettings = () => {
  return (
    `<div class="settings hidden">
      <h3>difficulty</h3>
      <div class="settings-difficulty">
        ${__WEBPACK_IMPORTED_MODULE_0__util_js__["c" /* divMapper */]("difficulty button", ["Pedestrian", "Mediocre", "Tough", "Insane", "Masochistic" ])}
      </div>
    </div>`);
};

const addPlaylistSettings = () => {
  $('.body').append(`<h3 class="label">Choose a playlist:<h3><div class="playlists hidden"></div>`);
  if (userPlaylists){
    $('.playlists').append(__WEBPACK_IMPORTED_MODULE_0__util_js__["d" /* playlistMapper */]("user-playlist",userPlaylists));
    $('.user-playlist').click(handleUserPlaylistClick);
  }
  $('.playlists').append(__WEBPACK_IMPORTED_MODULE_0__util_js__["e" /* defaultPlaylists */]());
  $('.default-playlist').click(handleDefaultPlaylistClick);
  $('.playlists').fadeIn(500);
};



const handleDifficultyClick = (e) => {
  level = e.currentTarget.textContent;
  duration = __WEBPACK_IMPORTED_MODULE_0__util_js__["f" /* durationMapping */](level);
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
    songs = __WEBPACK_IMPORTED_MODULE_0__util_js__["g" /* validSongs */](response.items);
    handlePlaylistSelection();
  });
};

const handleDefaultPlaylistClick = (e) => {
  songs = __WEBPACK_IMPORTED_MODULE_0__util_js__["h" /* playlistToSongsMapping */](e.currentTarget.attributes.name.value);
  handlePlaylistSelection();
};

const handlePlaylistSelection = () => {
  $('.label').fadeOut(300, function(){ $(this).remove();});
  $('.playlists').fadeOut(300, function(){ $(this).remove();});
  __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* shuffle */](songs);
  questions = songs.slice(0,10);
  currentQuestion = questions.shift();
  $('.body').append("<div id='myProgress'><div id='myBar'></div></div>");
  $('.body').append(
    `<div id='question'>
      <img class="chosen-playlist" src=${playlistImage} />
      <div class="audio-answers"></div>
    </div>`);
  showQuestion(currentQuestion);
};

const showQuestion = (question) => {
  var buttonAudio = $(`<div class="button-audio">
    <div id="play"><i class="fa fa-play fa-3x play-icon" aria-hidden="true"></i></div>
    <audio id="audio" src=${question.url}/>
  </div>`);
  $('.audio-answers').append(buttonAudio);
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
  __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* shuffle */](songs);
  let i = 0;
  while(holder.length < 4){
    if (songs[i].name !== question.name){
      holder.push(songs[i].name);
    }
    i++;
  }
  return __WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* shuffle */](holder);
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


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const songs = [ { url: 'https://p.scdn.co/mp3-preview/3859547944f57cfb7b996f6551148c9467889d4b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hips Don\'t Lie' },
  { url: 'https://p.scdn.co/mp3-preview/6d6e50462ebed94662d84509d75a3a73fbf65fec?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Crazy in Love' },
  { url: 'https://p.scdn.co/mp3-preview/d71b06b9141759e8936335ad60f824f55814d831?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Cha' },
  { url: 'https://p.scdn.co/mp3-preview/0eda514ae31d2e972d9481a5c782a66d65d0eaf6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Gold Digger' },
  { url: 'https://p.scdn.co/mp3-preview/64e5d7979445e8402011934fe1c201675f1c210e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Party In The U.S.A.' },
  { url: 'https://p.scdn.co/mp3-preview/b9c7414d6093b07d782da75c9189f8f887b31ab9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Yeah!' },
  { url: 'https://p.scdn.co/mp3-preview/1e7610e9553148155b711c55f10d5912290f6878?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Where Is The Love?' },
  { url: 'https://p.scdn.co/mp3-preview/14a42f83aad3ea545736184a08323545090bdd48?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lose Yourself - Soundtrack Version' },
  { url: 'https://p.scdn.co/mp3-preview/c48860e5c7ce2f6a312b6bc4efd16de85ec49216?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Survivor' },
  { url: 'https://p.scdn.co/mp3-preview/3017f41234c54ef09c66f4d2ff47e1acee8d8a4e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '4 Minutes - feat. Justin Timberlake And Timbaland' },
  { url: 'https://p.scdn.co/mp3-preview/6ed3097e490b67e39b05b7ec87740a584dcb64cb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Stop The Music' },
  { url: 'https://p.scdn.co/mp3-preview/9dfd5e30d0e9cf447d525932ab86e4daa75ad33f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ignition - Remix' },
  { url: 'https://p.scdn.co/mp3-preview/a3e433aefb4d7d74fab9ed6d2cf9f2b6209db311?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'It Wasn\'t Me' },
  { url: 'https://p.scdn.co/mp3-preview/a253bbc492e7da5bb9ae069103a2bc404055a047?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dynamite' },
  { url: 'https://p.scdn.co/mp3-preview/e40ad9c8016efc1f25a291f3b0aea58d691948b5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hey Ya! - Radio Mix / Club Mix' },
  { url: 'https://p.scdn.co/mp3-preview/ebc79c6e835bd18a744307d51c942a749e3ad2ca?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'One, Two Step' },
  { url: 'https://p.scdn.co/mp3-preview/8ab0eb630a60787224163576736647620b6d98c8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'TiK ToK' },
  { url: 'https://p.scdn.co/mp3-preview/446c66f2946007c502342d167284f6e3a02c7705?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'In My Head' },
  { url: 'https://p.scdn.co/mp3-preview/507a3f678f015d1d67893d4f35eb38904ca5ece8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Oops!...I Did It Again' },
  { url: 'https://p.scdn.co/mp3-preview/3c97985f3736fab6d4abcd2067f346a9b30955fa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Halo' },
  { url: 'https://p.scdn.co/mp3-preview/b05681b8d3d07a6e0eed3a69d7e6bc221064d8e6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Crazy' },
  { url: 'https://p.scdn.co/mp3-preview/102255c25347769652df929b2cedb748a7e49b4a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Last Friday Night (T.G.I.F.)' },
  { url: 'https://p.scdn.co/mp3-preview/497f3eed8dedf972b878e04e4e3f6b18556226c3?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Complicated' },
  { url: 'https://p.scdn.co/mp3-preview/620bf0eecfb629e4bcd9feac1dd61e3bac66e654?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Since U Been Gone' },
  { url: 'https://p.scdn.co/mp3-preview/3046f26f587150c851101d714b9eee28d1c32581?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'She Will Be Loved' },
  { url: 'https://p.scdn.co/mp3-preview/3151f650bb1fc7322717402ae7d7e3d79f42e5b0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Poker Face' },
  { url: 'https://p.scdn.co/mp3-preview/10d17836747a13d17cf73a570fd7ff094482a12f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hollaback Girl' },
  { url: 'https://p.scdn.co/mp3-preview/29414f20ba1659e9f54612e358d881861aa90c2d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Kissed a Girl' },
  { url: 'https://p.scdn.co/mp3-preview/27cd79ca009d7cb88970625eb55877d8be947130?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'F**k You' },
  { url: 'https://p.scdn.co/mp3-preview/06b19381ba63728f291972e244524dd222cbe645?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Drop It Like It\'s Hot' },
  { url: 'https://p.scdn.co/mp3-preview/77bebc1b16038e9815ffa63d91492bc3b7b8d5a6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bye Bye Bye' },
  { url: 'https://p.scdn.co/mp3-preview/31164e6bd7907184d43b803d8352087cc0daa718?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bad Romance' },
  { url: 'https://p.scdn.co/mp3-preview/f3d2399d85d47296e11452411a1e010b2c7ca371?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bleeding Love' },
  { url: 'https://p.scdn.co/mp3-preview/9ac6ac06e93f53f6ded690a12c38d21e3a7a0d71?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Know You Want Me (Calle Ocho)' },
  { url: 'https://p.scdn.co/mp3-preview/91f9d6e2c692afb77bed3a40e7bf72e95ac6dd67?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'So What' },
  { url: 'https://p.scdn.co/mp3-preview/958b3e3c13c8c1fed008400ec2a6b821a821cccc?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Snow (Hey Oh)' },
  { url: 'https://p.scdn.co/mp3-preview/82731065c728a8e9baf09f4e1af235265cd19054?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Seven Nation Army' },
  { url: 'https://p.scdn.co/mp3-preview/abe929d2a0fba9d1e6c284fa3e052b3e0e866984?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Raise Your Glass' },
  { url: 'https://p.scdn.co/mp3-preview/eb8e1344c10b93965b3d8ebf270efb1b74ae97d6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dirrty' },
  { url: 'https://p.scdn.co/mp3-preview/d4a0e1cd08839a722f4f2af160aabac07371ecd2?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dancing in the Moonlight' },
  { url: 'https://p.scdn.co/mp3-preview/f9877d70c57311941dca4782fbaa41efce514c67?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'When Love Takes Over (feat. Kelly Rowland)' },
  { url: 'https://p.scdn.co/mp3-preview/2c0deb881f7dea4fc65e3f11f54c5558da4f0d29?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fuck You' },
  { url: 'https://p.scdn.co/mp3-preview/57c6b6535c3edb18f1f441b22f0cc8117784e42d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fireflies' },
  { url: 'https://p.scdn.co/mp3-preview/07c6c33d6426d61ffd2e93d4c06ca599f7761b46?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Just the Way You Are' },
  { url: 'https://p.scdn.co/mp3-preview/99c41fbd4f944539451f235c689391f11e8259ca?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Mercy' },
  { url: 'https://p.scdn.co/mp3-preview/b6393162ba6857ed9954230a0f2a2f1c3cab0883?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hey, Soul Sister' },
  { url: 'https://p.scdn.co/mp3-preview/7424380e04bb59980e2e836382b4568e06e73635?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'So Sick' },
  { url: 'https://p.scdn.co/mp3-preview/482cf9985443c2e4907eff3c81f1107616a42ef1?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Follow Me' },
  { url: 'https://p.scdn.co/mp3-preview/83b2d8de11586a6c8c156ee46cbe8e131e0e9f9f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'All The Things She Said' },
  { url: 'https://p.scdn.co/mp3-preview/d6fc23418ef4a090922decfe6a47c7bc87c1d762?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Grenade' },
  { url: 'https://p.scdn.co/mp3-preview/bb0a310830636ebf8e5f6a1fa03d129a9724f7ec?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Viva La Vida' },
  { url: 'https://p.scdn.co/mp3-preview/1012fc6985ded238df0fceb806d34deb3f1e4328?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I\'m Like A Bird' },
  { url: 'https://p.scdn.co/mp3-preview/7c91c6dc291142a9a489eb9be0a261b489028933?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'If I Ain\'t Got You' },
  { url: 'https://p.scdn.co/mp3-preview/5c4c61c2e44da71d54c6f232573b44355d1ac06e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'You\'ve Got The Love' },
  { url: 'https://p.scdn.co/mp3-preview/128893055a1125f5f401947349b80e1cdc230302?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Grace Kelly' },
  { url: 'https://p.scdn.co/mp3-preview/1d9582bc88459ff25f3d2948ef397ff01768a8ad?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lights - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/c808e35b385571cbda7ccf893c9c568b83a0390d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'How to Save a Life' },
  { url: 'https://p.scdn.co/mp3-preview/84b0ad9f6dddec182acb3e52fd9c1b97567c5ffb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Can\'t Fight The Moonlight' },
  { url: 'https://p.scdn.co/mp3-preview/e194d189aa0d958ae001506e82ddfcbf62988e2f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Milkshake' },
  { url: 'https://p.scdn.co/mp3-preview/01acb992765814da4cbcd7080b7933aedd723b26?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Reason' },
  { url: 'https://p.scdn.co/mp3-preview/406ce8fc608ab6186b716977fad1151f4be1b179?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Chasing Cars' },
  { url: 'https://p.scdn.co/mp3-preview/a83eedd6b982d4afdc2ceaeb458f471118ad78aa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Wake Me Up When September Ends' } ];
/* harmony export (immutable) */ __webpack_exports__["a"] = songs;

const names = songs.map((e) => e.name);
/* unused harmony export names */



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const songs = [ { url: 'https://p.scdn.co/mp3-preview/50e82c99c20ffa4223e82250605bbd8500cb3928?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hotel California' },
  { url: 'https://p.scdn.co/mp3-preview/5fce831e28eb2ae69f1c44e340c2368c228e0764?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'September' },
  { url: 'https://p.scdn.co/mp3-preview/8fe58f0863b4f70a1a9a0b7e81f5e76ca3273154?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Superstition - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/1105f02041b9568367b9fa0a782de97ccf7ac85c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Have You Ever Seen The Rain?' },
  { url: 'https://p.scdn.co/mp3-preview/d1ff0ba5c5538ca2c50b808aab2278253c98b038?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bohemian Rhapsody - Remastered 2011' },
  { url: 'https://p.scdn.co/mp3-preview/2619e7b38719422fc859407abd37601992b3dbdf?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sweet Home Alabama' },
  { url: 'https://p.scdn.co/mp3-preview/4e6739bb8e557d02c29b8204ccb24063a90d36f4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ziggy Stardust - 2012 Remastered Version' },
  { url: 'https://p.scdn.co/mp3-preview/a4fbbf57dbc6df3c901e6d4aed750cbda3da7686?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'December, 1963 (Oh What A Night!)' },
  { url: 'https://p.scdn.co/mp3-preview/aa826e8af9e873f09466c96d5dc19801e2431432?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Mrs. Robinson' },
  { url: 'https://p.scdn.co/mp3-preview/77cc27ab6ee9c5b4d35d1f8b1c176c4686e06b80?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sultans Of Swing' },
  { url: 'https://p.scdn.co/mp3-preview/5fda76b980c7de5df1e7e9b2d54464665b6029ce?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Stop Me Now - Remastered 2011' },
  { url: 'https://p.scdn.co/mp3-preview/6cb1bd639749cd5d063a692206730bb70aa21bab?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Come And Get Your Love' },
  { url: 'https://p.scdn.co/mp3-preview/3f451d46def07f436729cd5b48d7d88a7d48dc4d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hold the Line' },
  { url: 'https://p.scdn.co/mp3-preview/2f56920743ab7da6d3d6331868dd23bbe72cd063?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ain\'t No Sunshine' },
  { url: 'https://p.scdn.co/mp3-preview/050f2114d4bad83aee7b05248e181edc34a26206?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Logical Song - 2010 Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/6707390f6c75c161c21d37bd1ea99661f06d6ff5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Beast Of Burden - Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/6a681e9a60eb8e2665c6345e52d18f628ee939e1?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Go Breaking My Heart' },
  { url: 'https://p.scdn.co/mp3-preview/7f57f4ede66150d8899f7a78896c746c1ebe1f51?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Video Killed The Radio Star - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/f44fb0e7334daef3df4faacf3b1e18d02b509165?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Rich Girl - Remastered 2003' },
  { url: 'https://p.scdn.co/mp3-preview/a8836c597850f17b9e5f8471a215c36c63e73298?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Roxanne - Remastered 2003' },
  { url: 'https://p.scdn.co/mp3-preview/55617a0eb9dc3b0a1bf27dea407a95e1371aab36?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'You\'re So Vain' },
  { url: 'https://p.scdn.co/mp3-preview/39160b959b9c3ef5eb82314160eb168af167ac3b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'A Horse with No Name' },
  { url: 'https://p.scdn.co/mp3-preview/46573cb026c2307864ab50ac1a29fcd30307ad35?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Piano Man' },
  { url: 'https://p.scdn.co/mp3-preview/ab86af73d22ea24e920c1fe59abf5c51d8823aaf?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Long Train Runnin\'' },
  { url: 'https://p.scdn.co/mp3-preview/97aaefeb43d0e2368526778487c7097607d5d78d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'More Than a Feeling' },
  { url: 'https://p.scdn.co/mp3-preview/87f2cd53a7068bb40daacb78fb40d5f4904a6485?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'My Sweet Lord' },
  { url: 'https://p.scdn.co/mp3-preview/24d78633a528e09723b948bf787fa476666bf45c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Miss You - Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/b9aa79e4a9222843e45839f51040ac320b97bb4b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Here Comes The Sun - 2004 Digital Remaster' },
  { url: 'https://p.scdn.co/mp3-preview/b2d590fb86a0424a3f959033df1a92f9a6c325d4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Boogie Wonderland' },
  { url: 'https://p.scdn.co/mp3-preview/09dcb64638386cd6eb5223ec5fcd5303ba046bd6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'American Pie' },
  { url: 'https://p.scdn.co/mp3-preview/e17e6ad85c4fd8517e1bd705a28ee0c21bab8f97?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Wild World' },
  { url: 'https://p.scdn.co/mp3-preview/3af01492c826dc0b22bad7df39c5a0d4cdbcb610?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Passenger' },
  { url: 'https://p.scdn.co/mp3-preview/07370e75eaec4423362be7a5f420882ce260266d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'T.N.T.' },
  { url: 'https://p.scdn.co/mp3-preview/08acafb7154f671e6c85f1136239ab4b401c41a0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Spirit In The Sky' },
  { url: 'https://p.scdn.co/mp3-preview/88034b6356a11c9bea4cca28d56a80efcc655ac4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lean on Me' },
  { url: 'https://p.scdn.co/mp3-preview/dfff8663f5fdc8dd4d7166df656575912785b6cf?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Kung Fu Fighting' },
  { url: 'https://p.scdn.co/mp3-preview/05ae0b02f8c7f0fca1c53a068eb0ba3e214ffa77?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Maggie May' },
  { url: 'https://p.scdn.co/mp3-preview/9185b6ecb03c528f260bac599560cde811f0a980?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Carry on Wayward Son' },
  { url: 'https://p.scdn.co/mp3-preview/8ec3a4b322c0df167ad409a668ceaa704fcbd1c0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Life On Mars? - 2015 Remastered Version' },
  { url: 'https://p.scdn.co/mp3-preview/902633811e6a135bdd9ece72e92318e2ce2fe509?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Me and Julio Down by the Schoolyard' },
  { url: 'https://p.scdn.co/mp3-preview/f4b0f9a10bfd23a105d35e32f67a4e8a1d88354c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Give A Little Bit' },
  { url: 'https://p.scdn.co/mp3-preview/6438510c7b7a752f3417d9f33a47d93b8633a0bb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Grease - From “Grease” Soundtrack' },
  { url: 'https://p.scdn.co/mp3-preview/5665823591395cba556aec206d2fd06814f6d5ea?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sunny' },
  { url: 'https://p.scdn.co/mp3-preview/2cd86380dc397f02912aa0dc1d27d5338eabf598?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Hot Stuff' },
  { url: 'https://p.scdn.co/mp3-preview/6ba9b626bb0d823e7fb4cbb24a0411d0a445790d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Black Magic Woman' },
  { url: 'https://p.scdn.co/mp3-preview/538979bb920f417d2fda44a2b5bd82422e56d633?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Dancing Queen' },
  { url: 'https://p.scdn.co/mp3-preview/9500d573d94db4bd32988d0bd10991113f8114e1?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Is This Love' },
  { url: 'https://p.scdn.co/mp3-preview/723547bdf0e19eed066f6dbe43d92bd5f8988e69?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '"Heroes" - Single Version; 2014 Remastered Version' },
  { url: 'https://p.scdn.co/mp3-preview/ff88f821d5f1ba4436bcd3ad83eadbae02ac6927?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Boys Are Back In Town' },
  { url: 'https://p.scdn.co/mp3-preview/7c93511a2b7fee96e4e2a823e78d6b5b07aa07a9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'YMCA - Original Version 1978' },
  { url: 'https://p.scdn.co/mp3-preview/2152ea9ba834d64f6d0b4fb0f8c9b3d776e002c9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Band On The Run - Remastered 2010' },
  { url: 'https://p.scdn.co/mp3-preview/ba83a7f06fac10fc6f653ed3d3345a4cf9d32e4a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Cocaine' },
  { url: 'https://p.scdn.co/mp3-preview/8995c11b9e4a866f37eced30cdc2038667f50cb7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Imagine - 2010 - Remaster' },
  { url: 'https://p.scdn.co/mp3-preview/28e6a2deb41a57f790403a8b52563a8d194d1627?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Easy' },
  { url: 'https://p.scdn.co/mp3-preview/4818369f0f21692907bf3a5bc7f62bacfa168770?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'It Never Rains in Southern California' },
  { url: 'https://p.scdn.co/mp3-preview/1ea4acc3a9d9ae09bea46172a6395988040e2c81?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Stumblin\' In' },
  { url: 'https://p.scdn.co/mp3-preview/4144cd85604fe1bfb8344f8018373f9120243f55?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Rock Your Baby' },
  { url: 'https://p.scdn.co/mp3-preview/54321b85d17753e0b8a030e7af9b50fe7335739f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Co-Co' },
  { url: 'https://p.scdn.co/mp3-preview/ed4ecc6244a48d5454d5ef2de8e877aa98b5bf85?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'My Coo Ca Choo' },
  { url: 'https://p.scdn.co/mp3-preview/96d4e08ee9b7d412429dff0b6c735d137e3d1326?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lust For Life' } ];
/* harmony export (immutable) */ __webpack_exports__["a"] = songs;

const names = songs.map((e) => e.name);
/* unused harmony export names */



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const songs = [ { url: 'https://p.scdn.co/mp3-preview/4eb779428d40d579f14d12a9daf98fc66c7d0be4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Billie Jean' },
  { url: 'https://p.scdn.co/mp3-preview/1268f4266754a407769dc415769573cedff7c61a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Africa' },
  { url: 'https://p.scdn.co/mp3-preview/0982054b4e6e6e53f0760b19a73c7128e367e615?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Footloose' },
  { url: 'https://p.scdn.co/mp3-preview/c105fe344eed632ebb72a1a0ed8efcfb5a47c6ff?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Another One Bites The Dust - Remastered 2011' },
  { url: 'https://p.scdn.co/mp3-preview/41932e7cc386f26ba6d419c2bd132dcf02ac0b2e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Maniac' },
  { url: 'https://p.scdn.co/mp3-preview/0f980d0fac59f77123d0272b78bce97f1374d9e9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Take On Me' },
  { url: 'https://p.scdn.co/mp3-preview/386acb48d5b2f6c205200062b6ce158c4ba52647?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Beat It - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/90dbf17146e76483a9fe296d7f03001e2f07199f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sweet Dreams (Are Made of This) - Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/9d4890524be2b649905e936ecf46f9f76dfe09fd?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Maneater - Radio Edit' },
  { url: 'https://p.scdn.co/mp3-preview/3bb02cefe0aca5129bb4be624a3f0dba6f31409f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Wanna Dance with Somebody (Who Loves Me)' },
  { url: 'https://p.scdn.co/mp3-preview/be3ddee73cfec910ba72a81cbbe7a56faee86657?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '(I Just) Died in Your Arms' },
  { url: 'https://p.scdn.co/mp3-preview/25bb61d538e6534b7db6a12f9b6cdcb25c137ce1?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sweet Child O\' Mine' },
  { url: 'https://p.scdn.co/mp3-preview/e27a6fa83d8b538e267e206f0dd8ac6303282eb5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Stop Believin\'' },
  { url: 'https://p.scdn.co/mp3-preview/b7dc055382341560973132ef4dcb45c150875f37?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Girls Just Want to Have Fun' },
  { url: 'https://p.scdn.co/mp3-preview/847a8d10c771089bbb767c1763f4b54b76115442?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Forever Young' },
  { url: 'https://p.scdn.co/mp3-preview/ad227db8dedb8bbe85768d81a804db1d6e537967?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Faith - Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/d05fce3285b636a2d3e54242c87833105b9337e6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Everybody Wants To Rule The World' },
  { url: 'https://p.scdn.co/mp3-preview/e2a0e908126b04c92cf0f80c29242d46f2b45396?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Down Under' },
  { url: 'https://p.scdn.co/mp3-preview/c67b4474b763735ac27fc54d9779609f7e10a9de?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t You (Forget About Me)' },
  { url: 'https://p.scdn.co/mp3-preview/62e6bcca77d4222db384fd5506ca34f594ae626f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Never Gonna Give You Up' },
  { url: 'https://p.scdn.co/mp3-preview/df03e2377675391fbc2b9c0100bbd30772ef6905?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I\'m So Excited' },
  { url: 'https://p.scdn.co/mp3-preview/a5e44c043b4e27c01ee92be422224edd2a222f34?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I\'m Gonna Be (500 Miles)' },
  { url: 'https://p.scdn.co/mp3-preview/9e37f230afd37042e49f3d144c3b94e0b39ef8ba?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Eye of the Tiger' },
  { url: 'https://p.scdn.co/mp3-preview/716dab6c5404d97ebfbc6ef8b0eb90b115966c38?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Red Red Wine - Edit' },
  { url: 'https://p.scdn.co/mp3-preview/5ff7f7b7d2af1a747da275bed3c49054c01b5b1c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Material Girl' },
  { url: 'https://p.scdn.co/mp3-preview/f44cc7911fd1ce5e2946299302f62c578a2b9a11?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Holding Out for a Hero' },
  { url: 'https://p.scdn.co/mp3-preview/a69af37a795f9c37e3c44d736b47e88cca6af48b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Come On Eileen - Single Edit' },
  { url: 'https://p.scdn.co/mp3-preview/ba282503560ba80d5e132f9d8fe89a3aa759c9b7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Walk Of Life' },
  { url: 'https://p.scdn.co/mp3-preview/9f298bcc07fc15eb46da47aae29a981d008260e0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Tainted Love' },
  { url: 'https://p.scdn.co/mp3-preview/f3736b3acecd13a8b343e844e56ea03f26e3710f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Karma Chameleon' },
  { url: 'https://p.scdn.co/mp3-preview/0b62db54da539b34856448e509c30ce4601931f5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Thriller' },
  { url: 'https://p.scdn.co/mp3-preview/06ee3eebc448fa3f13144d300ff8828592c00ae9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'We Built This City' },
  { url: 'https://p.scdn.co/mp3-preview/36ca54a4ddb42fac1cecd19684c351f160ed55fa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'In The Air Tonight - 2015 Remastered' },
  { url: 'https://p.scdn.co/mp3-preview/c711d77627eec81e5abbff3a8322741efd45657a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '99 Luftballons' },
  { url: 'https://p.scdn.co/mp3-preview/d51127e836e3a7bf005ecc519f2766a862a5739d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Heaven Is a Place on Earth' },
  { url: 'https://p.scdn.co/mp3-preview/537b2ce6aa12eb74d4c1dc050b837726075b223c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Big In Japan - Original' },
  { url: 'https://p.scdn.co/mp3-preview/8b9cbedb2b196bfe1f0f6e79dc88e3f9aba1d422?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Got My Mind Set On You - Extended Version' },
  { url: 'https://p.scdn.co/mp3-preview/d7c7088e15ff83fd4352fa675f52e29986671b0c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fast Car' },
  { url: 'https://p.scdn.co/mp3-preview/107b5dc98026a3e6de5dfe5aac9e560238df76b4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'It\'s Raining Men' },
  { url: 'https://p.scdn.co/mp3-preview/a6effd2d1f230362d716971729759637942834fd?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'All Night Long (All Night)' },
  { url: 'https://p.scdn.co/mp3-preview/a8fb0eb28d9d8f6ca56252a18ba84ecbe434a294?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '(I\'ve Had) The Time of My Life' },
  { url: 'https://p.scdn.co/mp3-preview/51efcc8d05cd3bc170e515185b037dccb62ddac7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Kiss (45 Version)' },
  { url: 'https://p.scdn.co/mp3-preview/be253860050a42e3ad439102baccc6ab46f0fb33?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t You Want Me - 2002 - Remaster' },
  { url: 'https://p.scdn.co/mp3-preview/32286853349519d57cec84af63f36015fb63305b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'True' },
  { url: 'https://p.scdn.co/mp3-preview/e754f2eec61bfb280ec8c2faa4bba9a33f2919f6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Conga' },
  { url: 'https://p.scdn.co/mp3-preview/5d64841dc688ea3b0d1f8e0c0790dc6c032614df?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'She Drives Me Crazy' },
  { url: 'https://p.scdn.co/mp3-preview/1272f580e516703bd4c01ebaf441b9a5261ad5d5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Jump - Remastered Version' },
  { url: 'https://p.scdn.co/mp3-preview/27b4eb723337cb13604727c4e4e421dad7cb1adf?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Walking On Sunshine' },
  { url: 'https://p.scdn.co/mp3-preview/ab98c6031a85f245e278159490ccb22dc3440ad7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Careless Whisper' },
  { url: 'https://p.scdn.co/mp3-preview/3595021bacf6f0b01655140c3e36e3d85c2259bd?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Walk This Way' },
  { url: 'https://p.scdn.co/mp3-preview/1a256ca908f26e5b56a83b17bb0d615158d02a2c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ghostbusters - From "Ghostbusters"' },
  { url: 'https://p.scdn.co/mp3-preview/bc6a35d8a3dbdbed0a7c7fde9a9ce6c4fc3207a6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'What A Feeling' },
  { url: 'https://p.scdn.co/mp3-preview/81dd1cc3e6c9e174059c33585d74e23f4f1c319b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Love Is A Battlefield' },
  { url: 'https://p.scdn.co/mp3-preview/f8eb1d8a625cfe1b27f136840d197abc6e592b8a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Relax - 7" Mix' },
  { url: 'https://p.scdn.co/mp3-preview/49cd7c1d341797324a07e1e48cbeb9d7ae6cc8ad?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Pour Some Sugar On Me (2012)' },
  { url: 'https://p.scdn.co/mp3-preview/d7698dbbf903869aeecc6cd749b1eed113adf71c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Look' },
  { url: 'https://p.scdn.co/mp3-preview/a6c7531033ccb7aa629556585891cb9bc0fe710a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Boys Of Summer' },
  { url: 'https://p.scdn.co/mp3-preview/448c1e06afca6cf1d91974a649fc1b1e00731ef9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Still Haven\'t Found What I\'m Looking For - Remastered 2007' },
  { url: 'https://p.scdn.co/mp3-preview/61b17a335d5afc1c4086b1b08e2400f0da147977?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Need You Tonight' },
  { url: 'https://p.scdn.co/mp3-preview/2046f0cec60f2aaed0dce002e4291eb80dd65294?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Our House' },
  { url: 'https://p.scdn.co/mp3-preview/04d98e36f065d66e9b4195fc202079aef01eb33f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Tell It to My Heart' },
  { url: 'https://p.scdn.co/mp3-preview/185a0e96216e429639eda30cf6c40abd01c0dce2?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Jack & Diane' },
  { url: 'https://p.scdn.co/mp3-preview/c166b879110c7659204e2c464ed3048b0a8fb6bb?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Always On My Mind' },
  { url: 'https://p.scdn.co/mp3-preview/fd6cde6ea002bc6c628297ec3a283d5d255cb470?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Take My Breath Away - Love Theme from "Top Gun"' },
  { url: 'https://p.scdn.co/mp3-preview/1664be1a2d154511f56adb2103f92410fae685de?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Talking in Your Sleep' },
  { url: 'https://p.scdn.co/mp3-preview/e7bc429aad4cba1d8dd8afe4f70de56065a0765f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Final Countdown' },
  { url: 'https://p.scdn.co/mp3-preview/a5e3b1d4b6fed0b708bcf8d159619652a3eed724?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Broken Wings' } ];
/* harmony export (immutable) */ __webpack_exports__["a"] = songs;

const names = songs.map((e) => e.name);
/* unused harmony export names */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const songs = [ { url: 'https://p.scdn.co/mp3-preview/c64ec1719551be609a2d2cc66a659ca3c86b0f90?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bitter Sweet Symphony' },
  { url: 'https://p.scdn.co/mp3-preview/175ce440229d2fb5361756f3e68c9647b86a8eee?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Californication' },
  { url: 'https://p.scdn.co/mp3-preview/9216ff07eedb76abd59c105cb45d1f6a82d95ca8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Gangsta\'s Paradise (feat. L.V.)' },
  { url: 'https://p.scdn.co/mp3-preview/69daa711bddd8fe7aa9acf17106ca85cf1ccfa14?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'No Scrubs' },
  { url: 'https://p.scdn.co/mp3-preview/0e87ade9fa869e31b3c32115c2c10ee8fa522c81?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Iris' },
  { url: 'https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Want It That Way' },
  { url: 'https://p.scdn.co/mp3-preview/baf18743c412db2c1fcff31fac079c1c982637d2?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'All Star' },
  { url: 'https://p.scdn.co/mp3-preview/6ee8cf3fc9a09831eb8538a7d696c89b3efb51d4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Blue (Da Ba Dee) - DJ Ponte Ice Pop Radio' },
  { url: 'https://p.scdn.co/mp3-preview/3a0bd02d9bf7de880da447365e0f2733e79266ef?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'It Wasn\'t Me' },
  { url: 'https://p.scdn.co/mp3-preview/3b37724224c064ea4af094c37b7a63aa3c6c86b9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I\'ll Be Missing You (feat. 112)' },
  { url: 'https://p.scdn.co/mp3-preview/89df793ea97c718c6d7be44e034f2fb95b2bc7fd?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Smells Like Teen Spirit' },
  { url: 'https://p.scdn.co/mp3-preview/02ee79550a6b38fc7e9f7df1e521ae639b1e2c23?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Say My Name' },
  { url: 'https://p.scdn.co/mp3-preview/79a104cf03840992b9de684636ef0cc0ef98b018?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Torn' },
  { url: 'https://p.scdn.co/mp3-preview/46ef9abd8e61d8d8b7f8dbb01df186ed1665ff72?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ice Ice Baby' },
  { url: 'https://p.scdn.co/mp3-preview/51e465f29b643ca46c80019e3f394c39ed948b6b?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Save Tonight' },
  { url: 'https://p.scdn.co/mp3-preview/085e154a4f2fcb73fbb5a97666bd1b31a92f3c7e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Mambo No. 5 (A Little Bit of...)' },
  { url: 'https://p.scdn.co/mp3-preview/261cad630d3f5c32c1ee519a50b836159f658e90?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'No Diggity' },
  { url: 'https://p.scdn.co/mp3-preview/27cda6c08b6ddeddd4d3116aef7769ea3b2b11f5?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Wannabe - Radio Edit' },
  { url: 'https://p.scdn.co/mp3-preview/77ec257a2900112b48fff6d99e6f6c8164c1bc46?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Zombie' },
  { url: 'https://p.scdn.co/mp3-preview/6194a1fcf46615acc43f6e295fcc00b1366ef4f0?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'What\'s Up?' },
  { url: 'https://p.scdn.co/mp3-preview/411caef0f4b93744944577de8dbb14af1b51df41?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Rhythm Is A Dancer - 7" Edit' },
  { url: 'https://p.scdn.co/mp3-preview/ece21f9b69d40aa168b197af97116f67497bf3a9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Don\'t Speak' },
  { url: 'https://p.scdn.co/mp3-preview/90e41778392f27b6f7dd82db4c90916b3727aa6a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Under The Bridge' },
  { url: 'https://p.scdn.co/mp3-preview/c8fef7f0c42941f08e11854ef261df937a37e177?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Killing Me Softly with His Song' },
  { url: 'https://p.scdn.co/mp3-preview/e12bf548d4633c9877b3772493bf9a980511b926?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Good Riddance (Time Of Your Life)' },
  { url: 'https://p.scdn.co/mp3-preview/054b31755a31a9f57c2d250fb4e7b1c29dd693c6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Come As You Are' },
  { url: 'https://p.scdn.co/mp3-preview/659374a67e87fcdc8ea1d975f65d3321084f4ab6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'What Is Love' },
  { url: 'https://p.scdn.co/mp3-preview/9a712112b9a333e326ff46c93e83c4c9e17b8e80?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bye Bye Bye' },
  { url: 'https://p.scdn.co/mp3-preview/ac41624323eaeb9f3f7b2c5ec585790cb1f9c8a8?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'All That She Wants' },
  { url: 'https://p.scdn.co/mp3-preview/2b6e89f6ad480deed492b01d5a63aabeaa6af1ff?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Black or White - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/73132a5b606f713a0e8858a5fba92582e7ec9e3c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'MMMBop - Single Version' },
  { url: 'https://p.scdn.co/mp3-preview/46576be464f8b45bf713700b0fc72de76ee74f9c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Gettin\' Jiggy Wit It' },
  { url: 'https://p.scdn.co/mp3-preview/da2134a161f1cb34d17c2d6d7e77cc93d1c1e6f7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: '...Baby One More Time' },
  { url: 'https://p.scdn.co/mp3-preview/ed1bc64cb8983776bab673c09b95aeb17860ffe7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Closing Time' },
  { url: 'https://p.scdn.co/mp3-preview/4dd22a16b659a777792b4e7e1c17c7c6b18f2be7?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Lovefool - Radio Edit' },
  { url: 'https://p.scdn.co/mp3-preview/88531d1cfdbcea42686efb7ea5dcf8c5ae797260?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Two Princes' },
  { url: 'https://p.scdn.co/mp3-preview/d4a8e5d6fe6e83aded1afc394b2fe8e792fb6810?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Better Off Alone - Radio Edit' },
  { url: 'https://p.scdn.co/mp3-preview/cb807aca1786ce663e5b533a17508df7ece2544a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'I Don\'t Want to Miss a Thing' },
  { url: 'https://p.scdn.co/mp3-preview/31c45c1e2951c7713b67a91299d3da369f502c75?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Genie in a Bottle' },
  { url: 'https://p.scdn.co/mp3-preview/e09a9500396ce14f6f3a670b4f87f7b8c915b640?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Fly Away' },
  { url: 'https://p.scdn.co/mp3-preview/d48422b8270cacc24b37df592fef5987719e8ffc?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Here Comes the Hotstepper' },
  { url: 'https://p.scdn.co/mp3-preview/b3b11fad170bcccca0af7325c6f75f7ec3c06b78?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'U Can\'t Touch This' },
  { url: 'https://p.scdn.co/mp3-preview/b353b33428d84b4bdc81cfc00b379a792f0c7e7e?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Tom\'s Diner' },
  { url: 'https://p.scdn.co/mp3-preview/32c13458bc781854a49a087d93b3947acee26cc3?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ghetto Supastar (That is What You Are)' },
  { url: 'https://p.scdn.co/mp3-preview/b25295eabcaa07875705eb931ff57b9299e5846d?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Man! I Feel Like A Woman!' },
  { url: 'https://p.scdn.co/mp3-preview/508870e159e4e672ce1c13f9b18655b62a229e29?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Bitch' },
  { url: 'https://p.scdn.co/mp3-preview/579967c91dc409b693b9819c12bbba83e4d0f9a4?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Believe' },
  { url: 'https://p.scdn.co/mp3-preview/d24fa7178eccb057ea3b9ccdac51584bfdcc8898?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Truly Madly Deeply' },
  { url: 'https://p.scdn.co/mp3-preview/ef1fbd441eb8576dcc7c44a67dff75db0d712d28?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Sandstorm' },
  { url: 'https://p.scdn.co/mp3-preview/183c0855e94b58dcb267e2b0721d4a3c99260acf?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Song 2 - 2012 Remastered Version' },
  { url: 'https://p.scdn.co/mp3-preview/457d1a134a7a8174f5fa52f2d2b82c6927acb7aa?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Ironic' },
  { url: 'https://p.scdn.co/mp3-preview/2088ffea2a54124e1e4e5e195303251f401c796f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Baby, I Love Your Way' },
  { url: 'https://p.scdn.co/mp3-preview/d596847aefcbafa2d620753d1a71971f3f776d13?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Boom, Boom, Boom, Boom!! - Airplay' },
  { url: 'https://p.scdn.co/mp3-preview/70c682670b19c9659961c51a1f917dc46da9b56f?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Kiss From A Rose' },
  { url: 'https://p.scdn.co/mp3-preview/dfca660c74d6459a663d3ab173814a3f043669be?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Walking In Memphis' },
  { url: 'https://p.scdn.co/mp3-preview/845f05078c3f5848ef706fcfe350d927722182d9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Breakfast At Tiffany\'s' },
  { url: 'https://p.scdn.co/mp3-preview/7b4d293b8e25bd860a4c12017647a900a75d8611?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'The Rhythm of the Night' },
  { url: 'https://p.scdn.co/mp3-preview/b13b9914d6f13e6c241b5729e21b69b915c08f84?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Adam\'s Song' },
  { url: 'https://p.scdn.co/mp3-preview/fe85f9b0e4f46bd5008f3c656fd15e00ca2c617c?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Cotton Eye Joe' },
  { url: 'https://p.scdn.co/mp3-preview/900921fe7ea36b001edc1c21f146c4732ff43032?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Jumpin\', Jumpin\'' },
  { url: 'https://p.scdn.co/mp3-preview/7e311365f30148e3dbff9efc1fce42331dd48fb9?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Mr. Vain - Radio Edit' },
  { url: 'https://p.scdn.co/mp3-preview/c4b86b4adfe16bfbdad84d1dfbbec5a18ca297ed?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Thong Song' },
  { url: 'https://p.scdn.co/mp3-preview/fc85b5f71fb0415b048a110e30be8d4f793e5835?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Pure Shores' },
  { url: 'https://p.scdn.co/mp3-preview/fedc56c0e12bcc3e16f23e52075e8a47049d3619?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Crush' },
  { url: 'https://p.scdn.co/mp3-preview/1573929d14099eb980b93df0223a19973156755a?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Walkin\' On The Sun' },
  { url: 'https://p.scdn.co/mp3-preview/977aa847ebb0df8ed2f1eb78b7427d2881ab1d30?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'We like to Party! (The Vengabus) - Airplay' },
  { url: 'https://p.scdn.co/mp3-preview/3da8cc2c5ec97c17fa55726b33f2e4273a2e9cc6?cid=8897482848704f2a8f8d7c79726a70d4',
    name: 'Captain Jack - Short Mix' } ];
/* harmony export (immutable) */ __webpack_exports__["a"] = songs;

const names = songs.map((e) => e.name);
/* unused harmony export names */



/***/ })
/******/ ]);