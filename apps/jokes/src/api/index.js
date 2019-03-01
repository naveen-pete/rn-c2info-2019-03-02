const baseUrl = 'https://api.icndb.com/jokes/random';

// https://api.icndb.com/jokes/random
export const getJoke = () => {
   return _getJoke(baseUrl);
}

// https://api.icndb.com/jokes/random?limitTo=[nerdy]
// https://api.icndb.com/jokes/random?limitTo=[nerdy,explicit]
export const getJokeForCategories = (settings) => {
   const url = `${baseUrl}?limitTo=[${settings.join(',')}]`;
   return _getJoke(url);
}

const _getJoke = async (url) => {
   console.log('url:', url);
   const response = await fetch(url);
   const data = await response.json();

   if (data.type !== 'success') {
      throw new Error('Error while getting a joke');
   }

   return data.value.joke;
}
