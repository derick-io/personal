import { template } from './template/template.js';

class View {
  constructor(controller) {
    this.controller = controller;
    const main = document.querySelector("main");

    this.controller.section.map( data => {
      let section = document.createElement("section");
      section.id = data.id 
      section.innerHTML = template(data);
      main.appendChild(section);
    });
  }
}

export { View }
