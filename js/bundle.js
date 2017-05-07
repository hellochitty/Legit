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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_js__ = __webpack_require__(1);

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
      sessionStorage.setItem('userPlaylists', JSON.stringify(__WEBPACK_IMPORTED_MODULE_0__util_js__["a" /* playlistMapping */](response)));
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
  __WEBPACK_IMPORTED_MODULE_0__util_js__["b" /* shuffle */](backgrounds);
  $('body').css('background', backgrounds[0]);

 $('#guest-login-button').click(() => {
   $('#login').hide();
   $('#loggedin').show();
 });

 $('#start-button').click(handleStartClick);

});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var holder = [];
// > newarr.forEach((e) => {
// ... if (e.track.preview_url){
// ..... holder.push({url:e.track.preview_url, name: e.track.name})
// ..... }
// ... }
// ... )


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
/* harmony export (immutable) */ __webpack_exports__["b"] = shuffle;



const divMapper = (className, array) => {
  return array.map((el) => `<div class=${"'"}${className}${"'"}>${el}</div>`).join("");
};
/* unused harmony export divMapper */




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
/* unused harmony export durationMapping */


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
  debugger;
  return result;
};
/* harmony export (immutable) */ __webpack_exports__["a"] = playlistMapping;



/***/ })
/******/ ]);