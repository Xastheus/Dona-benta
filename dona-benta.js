let lastScroll = 0;
const rodape = document.getElementById('footer');

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        footer.classList.remove('show');
    } else {
        footer.classList.add('show');
    }   

    lastScroll = currentScroll;
});

window.addEventListener('load', () => {
    footer.classList.add('show');
});

  document.getElementById ('filtro').addEventListener('change', function () {
      if(this.checked) {
        // document.body.style.backgroundColor = 'black';
        document.body.style.background.opacity = '0';
          document.getElementById('cabecalho').style.opacity = '0';
          document.getElementById('swiper').style.opacity = "0.6";
          document.getElementById('feed-titulo').style.opacity = "0";
          document.getElementById('feed-paragrafo').style.opacity = "0";
          document.getElementById('imagens-feed').style.opacity = "0.3";
          document.getElementById('footer').style.opacity = "0";
      } else {
        document.body.style.backgroundColor = '';
        document.getElementById('cabecalho').style.opacity = '1';
        document.getElementById('swiper').style.opacity = "1";
        document.getElementById('feed-titulo').style.opacity = "1";
        document.getElementById('feed-paragrafo').style.opacity = "1";
        document.getElementById('imagens-feed').style.opacity = "1";
        document.getElementById('footer').style.opacity = "1";
      };
  })

  const textosFiltro = document.querySelectorAll(".lista-filtro__link");

  textosFiltro.forEach(text => {
    text.addEventListener("click", () => {

            text.classList.toggle("persisted-focus");
    });
  });

