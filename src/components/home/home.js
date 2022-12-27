import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';
import { Nav } from '../nav/nav.js';
import { Footer } from '../footer/footer.js';
import { Main } from '../main/main.js';
import { Section } from '../section/section.js';

class Home {
  constructor() {
    this.model = new Model();
    this.controller = new Controller(this.model);
    this.view = new View(this.controller);
    this.loadComponents();
  }

  loadComponents() {
    this.nav = new Nav();
    this.main = new Main();
    this.section = new Section();
    this.footer = new Footer();
  }
}

export { Home }
