import './main.scss'; 

function template(controller) {
  return `
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
