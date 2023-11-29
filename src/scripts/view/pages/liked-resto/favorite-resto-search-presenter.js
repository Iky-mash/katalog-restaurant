/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
class FavoriteRestaurantSearchPresenter {
  constructor({ favoriteResto }) {
    this._listenToSearchRequestByUser();
    this._favoriteResto = favoriteResto;
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchResto(event.target.value);
    });
  }

  async _searchResto(latestQuery) {
    this._latestQuery = latestQuery.trim();
    let foundResto;
    if (this.latestQuery.length > 0) {
      foundResto = await this._favoriteResto.searchResto(this.latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllResto();
    }
    this._showFoundResto(foundResto);
  }

  _showFoundResto(Restaurants) {
    const restaurantContainer = document.querySelector('.Restaurants');

    if (restaurantContainer) {
      const html = Restaurants.reduce(
        (carry, resto) => carry.concat(`
                <li class="resto">
                    <span class="resto__title">${resto.title || '-'}</span>
                </li>
            `),
        '',
      );
      restaurantContainer.innerHTML = html;

      document
        .getElementById('Restaurant-search-container')
        .dispatchEvent(new Event('resto:searched:updated'));
    } else {
      console.error('Restaurant container not found');
    }
  }

  get latestQuery() {
    return this._latestQuery;
  }
}

export default FavoriteRestaurantSearchPresenter;
