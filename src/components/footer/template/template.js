import './footer.scss'; 

function template(controller) {
  return `
    <div class="footer-logo">
      ${controller.logoPath}
    </div>
    <div class="footer-links">
      ${controller.links.map( link => `
        <div class="footer-item">
          <a class="footer-link" href="${link.path}">
            <i class="footer-icon ${link.icon}"></i>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

export { template }