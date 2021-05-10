import FavoriteRestoIdb from '../data/therestodb-source';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

// method init
const LikeButtonInitiator = {
  // container untuk menampung tombol like diltekan dan objek resto yang hendak dimasukan
  async init({ likeButtonContainer, resto }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  // render akan dipanggil di akhir
  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  // method untuk tombol like resto yang belum di like
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  // method untuk tombol like resto yang sudah di like
  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
