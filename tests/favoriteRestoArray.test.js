import { afterEach, describe } from '@jest/globals';
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return, , eqeqeq
    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getResto(restaurant.id)) {
      return;
    }

    favoriteRestaurants.push(restaurant);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id

    // eslint-disable-next-line eqeqeq
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

  // async searchResto(query) {
  //   return (await this.getAllResto()).filter((restaurant) => {
  //     const loweredCaseRestaurantTitle = (restaurant.name || '-').toLowerCase();
  //     const jammedRestaurantTitle = loweredCaseRestaurantTitle.replace(/\s/g, '');

  //     const loweredCaseQuery = query.toLowerCase();
  //     const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

  //     return jammedRestaurantTitle.indexOf(jammedQuery) !== -1;
  //   });
  // },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => {
    favoriteRestaurants = [];
  });

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
