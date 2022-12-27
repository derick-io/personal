import 'bootstrap/dist/css/bootstrap.css'; 
import { Router } from './router.js';
import { Home } from "./components/home/home.js";

class App extends Router {
  constructor() {
    super("Netlify");
    return super.router([
      { path: "#home", component: Home }
    ]);
  }
}

window.onload = function() {
  let app = new App();
}
