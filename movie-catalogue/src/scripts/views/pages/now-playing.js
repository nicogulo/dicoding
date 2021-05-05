import TheMovieDbSource from '../../data/themoviedb-source';
import { createMovieDetailTemplate, createMovieIemTemplate } from '../templates/template-creator';

const NowPlaying = {
  async render() {
    return `
    <div class="content">
        <h2>Now Playing Page</h2>
        <div class="content__heading">Now Playing in Cinemas</div>
        <div id="movies" class="movies"></div>
    </div>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createMovieIemTemplate(movie);
    });
  },
};

export default NowPlaying;
