import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="movie" class="movie"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const list = await TheRestoDbSource.detailResto(url.id);
    const listContainer = document.querySelector('#movie');
    listContainer.innerHTML = createRestoDetailTemplate(list);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: list.id,
        title: list.title,
        overview: list.overview,
        backdrop_path: list.backdrop_path,
        vote_average: list.vote_average,
      },
    });
  },
};

export default Detail;
