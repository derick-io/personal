class _Document {
  constructor(title) {
    this.title = title
    this.setUp();
  }

  setUp() {
    window["_globals"] = {};

    _globals["title"] = this.title;

    window.addEventListener('hashchange', () => {
      document.title = `${_globals["title"]} - ${location.hash.split("#")[1]}`
    }, false);

  }

  setDocumentTitle(title) {
    document.title = title;
  }


  loader() {
    document.body.innerHTML = `
      <div style="
        height: 100vh; 
        width: 100vw; 
        z-index: 250;" 
        class="loader bg-white text-dark position-fixed fade show">
        <div class="text-center">
          <div class="spinner-border position-absolute top-50 text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    `;
    let interval = setInterval(() => {
      document.querySelector(".loader").classList.remove("show");
      document.querySelector(".loader").classList.add("hide");
      setTimeout(() => document.querySelector(".loader").classList.add("visually-hidden"), 300);
      clearInterval(interval);
    },3000);
  }
}

export { _Document }
