/* eslint-disable no-undef */
import 'regenerator-runtime';
/* eslint-disable no-unused-vars */
import filterContacts from 'lodash.filter';
import css from '../styles/style.scss';
import App from './view/main';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;
const app = new App({
  burger: document.querySelector('#hamburger'),
  navbar: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
import('lodash.filter')
  .then((module) => module.default)
  .then(filterContacts)
// eslint-disable-next-line no-alert
  .catch((error) => alert(error));
