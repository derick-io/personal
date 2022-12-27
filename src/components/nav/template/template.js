import './nav.scss'; 

function template(controller) {
  return `
    <div class="nav-logo">
      ${controller.logoPath}
    </div>
    <div class="nav-links">
      ${controller.links.map( link => `
        <div class="nav-item">
          <a class="nav-link" href="${link.path}">
            <span class="nav-label">${link.label}</span>
            <span class="nav-icon material-icons">${link.icon}</span>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

export { template }
