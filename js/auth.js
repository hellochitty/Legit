
const authScript = () => {
    var stateKey = 'spotify_auth_state';
    /**
     * Obtains parameters from the hash of the URL
     * @return Object
     */
    function getHashParams() {
      var hashParams = {};
      var e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    /**
     * Generates a random string containing numbers and letters
     * @param  {number} length The length of the string
     * @return {string} The generated string
     */
    function generateRandomString(length) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    // var userProfileSource = document.getElementById('user-profile-template').innerHTML,
    //     userProfileTemplate = Handlebars.compile(userProfileSource),
    //     userProfilePlaceholder = document.getElementById('user-profile');
    //
    //     oauthSource = document.getElementById('oauth-template').innerHTML,
    //     oauthTemplate = Handlebars.compile(oauthSource),
    //     oauthPlaceholder = document.getElementById('oauth');


    var params = getHashParams();

    var access_token = params.access_token,
        state = params.state,
        storedState = localStorage.getItem(stateKey);
  // if (access_token && (state == null || state !== storedState)) {
    if (access_token && (state == null)) {
      alert('There was an error during the authentication, please try again.');
    } else {
      localStorage.removeItem(stateKey);
      if (access_token) {
        $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
              'Authorization': 'Bearer ' + access_token
            },
            success: function(response) {
              // sessionStorage.setItem('displayName', response.display_name);
              // sessionStorage.setItem('displayPic', response.images[0].url);
              sessionStorage.setItem('accessToken', access_token);
              // userProfilePlaceholder.innerHTML = userProfileTemplate(response);

              $('#login').hide();
              $('#loggedin').fadeIn(500);
              $('#user-profile').prepend(
                `<img id="user-pic" src="${response.images[0].url}" />
                <p id="profile-name">${response.display_name}</p>`);
            }
        });
      } else {
          $('#login').fadeIn(500);
          $('#loggedin').hide();
      }

      document.getElementById('login-button').addEventListener('click', function() {

        var client_id = 'eb7109a8a1294315ae5b96f61a3c0be2'; // Your client id
        var redirect_uri = 'http://legit.hahaha.cool/'; // Your redirect uri

        if (window.location.origin === 'http://localhost:8080'){
          redirect_uri = 'http://localhost:8080';
        }

        var state = generateRandomString(16);

        localStorage.setItem(stateKey, state);
        var scope = 'user-read-private user-read-email';

        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(redirect_uri);
        url += '&state=' + encodeURIComponent(state);

        window.location = url;
      }, false);
    }
  };
  authScript();
