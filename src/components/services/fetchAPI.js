const KEY = `key=29885299-b4c69978fe670a05b23642baf`;
const baseUrl = `https://pixabay.com/api/?orientation=horizontal&${KEY}&image_type=photo&per_page=12`;

function fetchImages(nextName, page) {
   return fetch(`${baseUrl}&q=${nextName}&page=${page}`).then(res => {
      if (res.ok) {
         return res.json();
      }
      return Promise.reject(
         new Error(`Nothing was ${nextName} found on request`)
      );
   });
}

const imageAPI = {
   fetchImages,
};

export default imageAPI;
