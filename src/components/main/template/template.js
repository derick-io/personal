import './main.scss'; 

function template(controller) {
  return `
    <a href="#home" 
    class="btn btn-primary position-fixed top-50 start-2" 
    style="z-index: 100">
    <span class="material-icons">arrow_upward</span>
    </a>
    <header class="header" id="home">
      <h1> ${controller.title} </h1>
      <h2> ${controller.data["content"]}
        <span class="header-icon material-icons text-danger">${controller.data["icon"]}</span>
      </h2>
      <img class="avatar" src="${controller.data["image_path"]}" alt="">
    </header>
  `;
}

export { template }
