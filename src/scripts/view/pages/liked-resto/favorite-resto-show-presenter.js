class FavoriteRestoShowPresenter {
  constructor({ view, favoriteResto }) {
    this._view = view;
    this._favoriteResto = favoriteResto;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurant = await this._favoriteResto.getAllResto();
    this._displayResto(restaurant);
  }

  // eslint-disable-next-line no-underscore-dangle
  _displayResto(restaurants) {
    this._view.showFavoriteRestaurants(restaurants);
  }
}

export default FavoriteRestoShowPresenter;
