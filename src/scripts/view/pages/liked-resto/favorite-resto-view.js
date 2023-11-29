import { createRestItemTemplate } from '../../templates/template-creator';

class FavoriteRestoView {
  // eslint-disable-next-line class-methods-use-this
  getTemplate() {
    return `
      <div class="content">
          <div class="headline_content">
            <h1 class="headline_title">Explore Restaurant</h1>
            <p class="headline_sub">Restaurant Favorite</p>
          </div>
        <div id="restaurants" class="restaurants">
        </div>
     </div>
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  //   runWhenUserIsSearching(callback) {
  //     document.getElementById('query').addEventListener('change', (event) => {
  //       callback(event.target.value);
  //     });
  //   }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestItemTemplate(restaurant)), '');
    } else {
      // eslint-disable-next-line no-underscore-dangle
      html = this._getEmptyRestaurantTemplate();
    }

    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restos:updated'));
  }

  // eslint-disable-next-line class-methods-use-this,no-underscore-dangle
  _getEmptyRestaurantTemplate() {
    return `
      <div class="resto-item_not_found">
        Tidak ada Restaurant yang anda cari ya
      </div>
    `;
  }
}

export default FavoriteRestoView;
