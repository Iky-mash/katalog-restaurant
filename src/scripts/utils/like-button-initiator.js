/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favorite-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../view/templates/template-creator';
 
const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._resto = restaurant;
    this._favoriteResto = FavoriteRestoIdb;
    await this._renderButton();
  },
 
  async _renderButton() {
    const { id } = this._resto || {};
 
    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },
 
  async _isMovieExist(id) {
    const movie = await FavoriteRestoIdb.getResto(id);
    return !!movie;
  },
 
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();
 
    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },
 
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