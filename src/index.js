import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  '41214727-6303ae3029c738ec798387c7a';

axios
  .get(`https://pixabay.com/api`, {
    params: {
      key: '41214727-6303ae3029c738ec798387c7a',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      q: 'cat',
    },
  })
  .then(({ data }) => console.log(data));

//   headers: { 'Access-Control-Allow-Origin': '*' },
// withCredentials: true,

// axios.defaults.headers.common['x-api-key'] =
//   '41214727-6303ae3029c738ec798387c7a';
// axios.defaults.baseURL = 'https://pixabay.com/api/';

// axios({
//   //   method: 'get',
//   //   url: 'https://pixabay.com/api/',
//   //   withCredentials: true,
//   params: {
//     //     // key: '41214727-6303ae3029c738ec798387c7a',
//     //     // image_type: 'photo',
//     //     // orientation: 'horizontal',
//     //     // safesearch: 'true',
//     q: 'cat',
//   },
//   //   headers: {
//   //     'Access-Control-Allow-Origin': '*',
//   //     'Content-Type': 'application/json',
//   //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   //   },
// }).then(response => {
//   console.log(response);
//   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'));
// });

// const postToAdd = {
//   webformatURL: '',
//   largeImageURL: '',
//   tags: '',
//   likes: '',
//   views: '',
//   comments: '',
//   dowloads: '',
// };

// const options = {
//   method: 'POST',
//   body: JSON.stringify(postToAdd),
//   headers: {
//     'Content-Type': 'application/json; charset=UTF-8',
//   },
// };

// fetch('https://pixabay.com' / posts, options)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));

// // import Notiflix from 'notiflix';
// // Notiflix.Notify.init({
// //   width: '780px',
// //   position: 'right-top',
// // });

// // import SimpleLightbox from 'simplelightbox';
// // const lightbox = new SimpleLightbox('ul.gallery a', {
// //   captionsData: 'alt',
// //   captionDelay: 250,
// // });
