/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable import/extensions */
// import { beforeEach } from '@jest/globals';
import FavoriteRestoShowPresenter from '../src/scripts/view/pages/liked-resto/favorite-resto-show-presenter';
import FavoriteRestoView from '../src/scripts/view/pages/liked-resto/favorite-resto-view';

// eslint-disable-next-line no-undef
describe('Showing all favorite resto', () => {
  let view;

  const renderTemplate = () => {
    view = new FavoriteRestoView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  // eslint-disable-next-line no-undef
  describe('When no resto have been liked', () => {
    // eslint-disable-next-line no-undef
    it('should render the information that no resto have been liked', () => {
      const favoriteResto = {
        // eslint-disable-next-line no-undef
        getAllResto: jest.fn().mockImplementation(() => []),
      };

      const presenter = new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      const restaurants = [];
      presenter._displayResto(restaurants);

      // eslint-disable-next-line no-undef
      expect(document.querySelectorAll('.resto-item_not_found').length).toEqual(1);
    });

    // eslint-disable-next-line no-undef
    it('should ask for the favorite resto', () => {
      const favoriteResto = {
        // eslint-disable-next-line no-undef
        getAllResto: jest.fn().mockImplementation(() => []),
      };

      // eslint-disable-next-line no-new
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });

      // eslint-disable-next-line no-undef
      expect(favoriteResto.getAllResto).toHaveBeenCalledTimes(1);
    });
  });

  // eslint-disable-next-line no-undef
  describe('When favorite restaurants exist', () => {
    // eslint-disable-next-line no-undef
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restos:updated', () => {
        // eslint-disable-next-line no-undef
        expect(document.querySelectorAll('.card').length).toEqual(2);

        done();
      });

      const favoriteResto = {
        getAllResto: jest.fn().mockImplementation(() => [
          {
            id: 11,
            name: 'A',
            rating: 3,
            description: 'Sebuah restaurant A',
          },
          {
            id: 22,
            name: 'B',
            rating: 4,
            description: 'Sebuah restaurant B',
          },
        ]),
      };

      // eslint-disable-next-line no-new
      new FavoriteRestoShowPresenter({
        view,
        favoriteResto,
      });
    });
  });
});
