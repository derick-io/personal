import { template } from './template/template.js';

class View {
  constructor(controller) {
    this.controller = controller
    this.wrapper = document.createElement("div")
    this.wrapper.classList.add("wrapper-container", "gradient")
    this.wrapper.innerHTML = template(this.controller)
    document.body.appendChild(this.wrapper)
  }

  append(element) {
    this.wrapper.appendChild(element)
  }
}

export { View }
