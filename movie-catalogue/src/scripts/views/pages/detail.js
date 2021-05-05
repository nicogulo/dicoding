import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;
