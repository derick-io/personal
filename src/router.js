import { _Document } from './document.js';

class Router extends _Document {
  constructor(title) {
    super(title);
  }

  router(routes) {
    return routes.map(route => this.run(route))
  }

  run(route) {
    if ( route.path == location.hash || location.pathname == "/") {
      this.setDocumentTitle(this.title)
      return new route.component()
    }
    return console.warn("something went wrong");
  }
}

export { Router };
