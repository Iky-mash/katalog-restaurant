/* eslint-disable import/no-unresolved */
import ListRestaurant from '../view/pages/daftar';
import Detail from '../view/pages/detail';
import Favorit from '../view/pages/favorit';

const routes = {
  '/': ListRestaurant,
  '/daftar': ListRestaurant,
  '/detail/:id': Detail,
  '/favorit': Favorit,
};

export default routes;
