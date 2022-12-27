import './section.scss'; 

function template(data) {
  return `
    <header>
      <div class="container container-sm container-md container-lg">
        <h2 class="text-center">${data.title}</h2>
      </div>
    </header>
    <div class="content">
      <div class="container container-sm container-md container-lg">
        ${data.content}
      </div>
    </div>
  `;
}

export { template }
