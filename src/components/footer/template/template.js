import './footer.scss'; 

function template(controller) {
  return `
    <div class="footer-links">
      ${controller.links.map( link => `
        <div class="footer-item">
          <a class="footer-link" href="${link.path}" target="_blank">
            <i class="footer-icon ${link.icon}"></i>
          </a>
        </div>
      `).join('')}
    </div>
  `;
}

export { template }
