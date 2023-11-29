/* eslint-disable no-new */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable no-irregular-whitespace */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
import FavoriteRestoIdb from "../../data/favorite-idb";
// import { createRestItemTemplate } from "../templates/template-creator";
import FavoriteRestoView from "./liked-resto/favorite-resto-view";
import FavoriteRestoShowPresenter from "./liked-resto/favorite-resto-show-presenter";

const view = new FavoriteRestoView();
const Favorit = {
    async render() {
      return view.getTemplate();
    },
    async afterRender() {
    new FavoriteRestoShowPresenter({ view, favoriteResto: FavoriteRestoIdb });
    },
  };
  
  export default Favorit;