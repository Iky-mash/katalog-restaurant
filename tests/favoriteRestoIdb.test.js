/* eslint-disable linebreak-style */
/* eslint-disable import/named */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    const restos = await FavoriteRestoIdb.getAllResto();

    // Menunggu semua proses penghapusan selesai
    await Promise.all(restos.map(async (resto) => {
      await FavoriteRestoIdb.deleteResto(resto.id);
    }));
  });
  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});
