

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

export const playlistMapper = (className, array) => {
  return array.map((el) => `<div class=${"'"}${className}${"'"}>${el}</div>`).join("");
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
