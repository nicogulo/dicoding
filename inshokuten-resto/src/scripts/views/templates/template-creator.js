import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurants) => `
  <h2 class="movie__title">${restaurants.name}</h2>
  <img class="movie__poster" src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" />
  <div class="movie__info">
  <h3>Information</h3>
    <h4>Tagline</h4>
    <p>${restaurants.city}</p>
    <h4>Rating</h4>
    <p>${restaurants.rating}</p>
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${restaurants.description}</p>
  </div>
`;

const createRestoItemTemplate = (restaurants) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${restaurants.name}"
            src="${restaurants.pictureId ? CONFIG.BASE_IMAGE_URL + restaurants.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/12'}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${restaurants.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/list/${restaurants.id}`}">${restaurants.name}</a></h3>
        <p>${restaurants.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
