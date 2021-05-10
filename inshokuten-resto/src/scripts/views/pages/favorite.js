import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__heading">Your Liked Movie</h2>
        <div id="movies" class="movies">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const movies = await FavoriteRestoIdb.getAllResto();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestoItemTemplate(movie);
    });
  },
};

export default Favorite;
