import { Model } from './model.js';
import { View } from './view.js';
import { Controller } from './controller.js';

class Nav {
  constructor() {
    this.model = new Model();
    this.controller = new Controller(this.model);
    this.view = new View(this.controller);
  }
}

export { Nav }
