import * as allOutThousands from './songs/all_out_00s.js';
import * as allOutNineties from './songs/all_out_90s.js';
import * as allOutEighties from './songs/all_out_80s.js';
import * as allOutSeventies from './songs/all_out_70s.js';


export const shuffle = (array) => {
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


export const divMapper = (className, array) => {
  return array.map((el) => `<div class=${"'"}${className}${"'"}>${el}</div>`).join("");
};

export const playlistMapper = (className, playlists) => {
  return playlists.map( playlist => {
    return `<div class=${"'"}${className} img-wrap${"'"} url=${playlist.url}>
      <img class="playlist-image" src=${playlist.image} />
      <p class="playlist-description">${playlist.name}</p>
    </div>`;
    }).join("");
};


export const durationMapping = lvl => {
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

export const validSongs = items => {
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

export const playlistToSongsMapping = pl => {
  switch (pl){
    case 'allOutThousands':
      return allOutThousands.songs;
    case 'allOutNineties':
      return allOutNineties.songs;
    case 'allOutEighties':
      return allOutEighties.songs;
    case 'allOutSeventies':
      return allOutSeventies.songs;
  }
};

export const defaultPlaylists = () => {
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
