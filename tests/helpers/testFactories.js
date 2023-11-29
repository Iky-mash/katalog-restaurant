/* eslint-disable import/newline-after-import */
/* eslint-disable import/prefer-default-export */
import FavoriteRestoIdb from '../../src/scripts/data/favorite-idb';
import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
const createLikeButtonPresenterWithResto = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    restaurant,
  });
};
export { createLikeButtonPresenterWithResto };
