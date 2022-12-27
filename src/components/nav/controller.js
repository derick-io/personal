class Controller {
  constructor(model) {
    this.model = model
  }

  handleEvent(event) {
    switch(event.type) {
      case "click": 
        this.clickHandler(event.target);
        break;
      default:
        console.log(event.target);
    }
  }

  clickHandler(target) {
    document.title = `${app_title} - ${location.hash.split("#")[1]}`
  }

  get links() {
    return this.model.links;
  }

  get logoPath() {
    return this.model.logoPath;
  }
}

export { Controller }
