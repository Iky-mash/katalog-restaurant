/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */
import Datasource from '../../data/datasource';
import { createRestItemTemplate } from '../templates/template-creator';
// import LikeButtonInitiator from '../../utils/like-button-initiator';
const ListRestaurant = {
  render() {
    return `
      <div class="content">
        <div class="headline_content">
          <p class="headline_sub">Restaurant</p>
        </div>
        <div id="restaurantList"></div>
      </div>
    `;
  },

  // async afterRender() {
  //   try {
  //     const restaurants = await Datasource.getAllRestaurants();
  //     createRestaurantListTemplate(restaurants);
  //   } catch (error) {
  //     console.error('Error', error);
  //   }
  // },
  async afterRender() {
    const restaurants = await Datasource.getAllRestaurants();
    const containersRestaurant = document.querySelector('#restaurantList');
    restaurants.forEach((restaurant) => {
      containersRestaurant.innerHTML += createRestItemTemplate(restaurant);
    });
  },
};

export default ListRestaurant;
