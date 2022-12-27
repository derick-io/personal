class Controller {
  constructor(model) {
    this.model = model
  }

  get section() {
    return this.model.section;
  }

}

export { Controller }
