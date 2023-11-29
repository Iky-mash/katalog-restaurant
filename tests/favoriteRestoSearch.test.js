/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
// import { spyOn } from 'jest-mock';
import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/liked-resto/favorite-resto-search-presenter';
// import FavoriteRestaurantIdb from '../src/scripts/data/favorite-idb';

describe('Searching Restaurants', () => {
  let presenter;
  let doneCalled = false;
  let favoriteResto;

  const searchResto = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;
    queryElement.dispatchEvent(new Event('change'));
  };
  const setRestoSearchContainer = () => {
    document.body.innerHTML = `
      <div id="Restaurant-search-container">
        <input id="query" type="text">
        <div class="Restaurant-result-container">
          <ul class="Restaurants">
          </ul>
        </div>
      </div>
    `;
  };
  const constructPresenter = () => {
    favoriteResto = {
      getAllResto: jest.fn(),
      searchResto: jest.fn(),
    };
    presenter = new FavoriteRestaurantSearchPresenter({
      favoriteResto,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });
  describe('When query is not empty', () => {
    it('should be able to capture the query typed by the user', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      searchResto('resto a');

      expect(presenter.latestQuery).toEqual('resto a');
    });

    it('should ask the model to search for liked Restaurants', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      searchResto('resto a');

      expect(favoriteResto.searchResto).toHaveBeenCalledWith('resto a');
    });
    //   it('should show the found resto', () => {
    //     presenter._showFoundResto([{ id: 1 }]);

    //     const foundResto = document.querySelectorAll('.resto');

    //     expect(foundResto.length).toEqual(1);
    //   });
    it('should show the found resto', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      presenter._showFoundResto([{ id: 1 }]);
      expect(document.querySelectorAll('.resto').length).toEqual(1);
      presenter._showFoundResto([
        {
          id: 1,
          title: 'Satu',
        },
        {
          id: 2,
          title: 'Dua',
        },
      ]);
      expect(document.querySelectorAll('.resto').length).toEqual(2);
    });
    it('should show the title of the found resto', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      presenter._showFoundResto([
        {
          id: 1,
          title: 'Satu',
        },
      ]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('Satu');

      presenter._showFoundResto([
        {
          id: 1,
          title: 'Satu',
        },
        {
          id: 2,
          title: 'Dua',
        },
      ]);
      const restoTitles = document.querySelectorAll('.resto__title');
      expect(restoTitles.item(0).textContent).toEqual('Satu');
      expect(restoTitles.item(1).textContent).toEqual('Dua');
    });
    it('should show - for found resto without title', () => {
      favoriteResto.searchResto.mockImplementation(() => []);
      presenter._showFoundResto([{ id: 1 }]);
      expect(document.querySelectorAll('.resto__title').item(0).textContent).toEqual('-');
    });
    it('should show the resto found by Favorite resto', (done) => {
      favoriteResto.searchResto.mockImplementation(() => []);
      document
        .getElementById('Restaurant-search-container')
        .addEventListener('resto:searched:updated', () => {
          expect(document.querySelectorAll('.resto').length).toEqual(3);
          if (!doneCalled) {
            doneCalled = true;
            done();
          }
        });
      favoriteResto.searchResto.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, title: 'resto abc' },
            { id: 222, title: 'ada juga resto abcde' },
            { id: 333, title: 'ini juga boleh resto a' },
          ];
        }
        return [];
      });
      searchResto('resto a');
    });
    it('should show the name of the movies found by Favorite Resto', (done) => {
      favoriteResto.searchResto.mockImplementation(() => []);
      document
        .getElementById('Restaurant-search-container')
        .addEventListener('resto:searched:updated', () => {
          const restoTitles = document.querySelectorAll('.resto__title');

          expect(restoTitles.item(0).textContent).toEqual('resto abc');
          expect(restoTitles.item(1).textContent).toEqual('ada juga resto abcde');
          expect(restoTitles.item(2).textContent).toEqual('ini juga resto film a');

          done();
        });

      favoriteResto.searchResto.mockImplementation((query) => {
        if (query === 'resto a') {
          return [
            { id: 111, title: 'resto abc' },
            { id: 222, title: 'ada juga resto abcde' },
            { id: 333, title: 'ini juga resto film a' },
          ];
        }

        return [];
      });

      searchResto('resto a');
    });
  });
  describe('When query is empty', () => {
    it('should capture the query as empty', () => {
      favoriteResto.getAllResto.mockImplementation(() => []);
      searchResto(' ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('    ');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('');
      expect(presenter.latestQuery.length).toEqual(0);
      searchResto('\t');
      expect(presenter.latestQuery.length).toEqual(0);
    });
  });
  it('should show all favorite resto', () => {
    favoriteResto.getAllResto.mockImplementation(() => []);
    searchResto('    ');
    expect(favoriteResto.getAllResto).toHaveBeenCalled();
  });
});
// describe('When no favorite resto could be found', () => {
//   it('should show the empty message', (done) => {
//     document
//       .getElementById('Restaurant-search-container')
//       .addEventListener('resto:searched:updated', () => {
//         expect(document.querySelectorAll('.resto__title').length).toEqual(1);
//         done();
//       });
//     favoriteResto.searchResto.mockImplementation(() => []);
//     searchResto('resto a');
//   });
// });
