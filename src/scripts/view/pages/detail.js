/* eslint-disable linebreak-style */
/* eslint-disable import/newline-after-import */
/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/datasource';
import { createRestDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-idb';
const Detail = {
  async render() {
    return `
        <div id="rest" class="restaurant"></div>
       <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const rest = await DataSource.detailRestaurant(url.id);
    const detail = rest.restaurant;
    const restoContainer = document.querySelector('#rest');

    restoContainer.innerHTML = createRestDetailTemplate(rest);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      restaurant: {
        id: detail.id,
        name: detail.name,
        description: detail.description,
        pictureId: detail.pictureId,
        city: detail.city,
        rating: detail.rating,
        drink: detail.drink,
        food: detail.food,

      },
    });
  },
};

export default Detail;
