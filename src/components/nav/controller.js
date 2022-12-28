class Controller {
  constructor(model) {
    this.model = model;
  }

  get links() {
    return this.model.links;
  }

  get logoPath() {
    return this.model.logoPath;
  }
}

export { Controller }
