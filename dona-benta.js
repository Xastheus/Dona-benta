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