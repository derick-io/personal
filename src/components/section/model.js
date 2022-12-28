class Model {
  constructor() {
    this.section = [
      {
        title: "About Me",
        id: "about",
        content: `
        In 2017, I began working as a front end web developer at a digital marketing agency named Virtude. <br>
        This experience led to a valuable insight: My interest in information technology. <br>
        And so I started honing my skills in SEO, online marketing and UI/UX. <br>
        2019 was the year I first worked with a 100% server-based ERP system at Infodesk. <br>  
        In spite of the 2020 pandemic, I continue to study and learn as much as I can about the IT market. <br>
        `
      },
      {
        title: "Contact Me",
        id: "contact",
        content: `
          <address class="mx-auto" style="width: 250px; border-left: 2px solid #5ebec4; padding-left: 18px;">
            <strong>Kichize Tenchnology.</strong><br>
            Saldanha Marinho, 600 <br>
            Campinas, SP - 13013-080<br>
            <a href=" https://wa.me/+5519991702683?text=Good%20morning%20how%20are%20you?" target="_blank">
              <abbr title="Phone">
                <i class="text-success fa-brands fa-whatsapp"></i>
              </abbr> 
              +55 (19)-99170-2683
            </a>
          </address>
          <address class="mx-auto" style="width: 250px; border-left: 2px solid #5ebec4; padding-left: 18px;">
            <strong>Derick Lucas Kichize Alves</strong><br>
            <a href="mailto:derickkichize.io@gmail.com">derickkichize.io@gmail.com</a>
          </address>
        `
      }
    ];
  }
}

export { Model }
