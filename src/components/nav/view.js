import { template } from './template/template.js';

class View {
  constructor(controller) {
    this.controller = controller
    this.nav = document.querySelector("nav");
    this.nav.id = "nav";
    this.nav.innerHTML = template(this.controller);
  }
}

export { View }
