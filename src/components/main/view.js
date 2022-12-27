import { template } from './template/template.js';

class View {
  constructor(controller) {
    this.controller = controller
    this.main = document.querySelector("main");
    this.main.setAttribute("data-bs-spy","scroll");
    this.main.setAttribute("data-bs-target","nav");
    this.main.setAttribute("data-bs-smooth-scrool","true");
    this.main.setAttribute("tabindex","0");

    this.main.innerHTML = template(this.controller);
  }
}

export { View }
