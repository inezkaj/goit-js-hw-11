import axios from 'axios';

import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '480px',
  position: 'right-top',
});

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let page = 1;
let query = '';
let per_page = 40;

const photoOptions = {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};

function fetchPhotos() {
  return axios
    .get(`https://pixabay.com/api/`, {
      params: {
        key: '41214727-6303ae3029c738ec798387c7a',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        q: query,
        per_page: per_page,
        page: page,
      },
    })
    .then(({ data }) => data);
}

function loadGallery() {
  console.log(page);
  return fetchPhotos()
    .then(data => {
      let photos = data.hits;

      // console.log(page);
      // console.log(data);
      // console.log(photos);

      if (photos.length == 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else {
        if (page == 1) {
          Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        }
        let photoDivs = photos.map(
          photo =>
            `<div class="gallery_item">
            <a class="gallery_link" href="${photo.largeImageURL}">
            <div class="photo-card">
            <img class="image" src="${photo.webformatURL}" width="290px" alt="${photo.tags}" loading="lazy" />
            <div class="info">
              <p class="info-item">
                <b>Likes </br>
                ${photo.likes}</b>
              </p>
              <p class="info-item">
                <b>Views </br>
                ${photo.views}</b>
              </p>
              <p class="info-item">
                <b>Comments </br>
                ${photo.comments}</b>
              </p>
              <p class="info-item">
                <b>Downloads </br>
                ${photo.downloads}</b>
              </p>
            </div>
          </div>
          </div>
          </a>
          </div>`
        );
        photoCards.innerHTML += photoDivs.join('');
        const lightbox = new SimpleLightbox(
          '.gallery .gallery_link',
          photoOptions
        );
        lightbox.refresh();
        scrollPhotos();
        loadMore.classList.remove('hidden');
      }

      let lastPage = Math.ceil(data.totalHits / per_page);
      if (page == lastPage) {
        loadMore.classList.add('hidden');
        Notiflix.Notify.failure(
          'We are sorry, but you have reached the end of search results.'
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
}

const photoSearch = document.querySelector('#search-form button[type=submit]');
const photoCards = document.querySelector('div.gallery');
const loadMore = document.querySelector('button.load-more[type=button]');

photoSearch.addEventListener('click', ev => {
  ev.preventDefault();

  let searchInputValue = document.querySelector(
    '#search-form input[name=searchQuery]'
  ).value;

  if (query != searchInputValue) {
    query = searchInputValue;
    page = 1;
    // czyszczenie
    photoCards.innerHTML = '';
    loadMore.classList.add('hidden');
  }
  loadGallery();
});

loadMore.addEventListener('click', ev => {
  page++;
  loadGallery();
});

function scrollPhotos() {
  const { height: cardHeight } = document
    .querySelector(`.gallery`)
    .firstElementChild.getBoundingClientRect();
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
