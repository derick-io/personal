class Model {
  constructor() {
    this.section = [
      {
        title: "About Me",
        id: "about",
        content: `Consectetur autem sapiente reiciendis omnis earum,
        ea. Quae corrupti non repellendus aperiam vitae Soluta 
        hic recusandae quam atque corrupti Cumque at ullam doloribus 
        nemo eveniet amet, vero. Dicta facilis eligendi?`
      },
      {
        title: "Contact Me",
        id: "contact",
        content: `
          <address class="mx-auto" style="width: 250px; border-left: 2px solid #5ebec4; padding-left: 18px;">
            <strong>Kichize Tenchnology.</strong><br>
            Saldanha Marinho, 600 <br>
            Campinas, SP - 13013-080<br>
            <a href=" https://wa.me/+5519991702683?text=I'm%20interested%20in%20your%20car%20for%20sale" target="_blank">
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
