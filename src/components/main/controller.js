class Controller {
  constructor(model) {
    this.model = model
  }

  get title() {
    return this.model.title;
  }

  get data() {
    return this.model.data;
  }

}

export { Controller }
