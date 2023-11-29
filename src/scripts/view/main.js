/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
// import UrlParser from '../routes/url-parser';
// import routes from '../routes/routes';
// import '../components/rest-item';
// import DataSource from '../data/datasource';
// eslint-disable-next-line no-unused-vars
import Drawer from '../utils/drawer';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({ burger, navbar, content }) {
    this.burger = burger;
    this.navbar = navbar;
    this.content = content;

    this.initialAppShell();
  }

  initialAppShell() {
    Drawer.init({
      burger: this.burger,
      navbar: this.navbar,
      content: this.content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this.content.innerHTML = await page.render();
    await page.afterRender();
    const skipLinkElem = document.querySelector('.skip-link');    
    skipLinkElem.addEventListener('click', (event) => {      
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}
export default App;
