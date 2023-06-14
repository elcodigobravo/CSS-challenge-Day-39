const btn = document.querySelector('.menu-icon');
const cont = document.querySelector('.menu');
const spans = document.querySelectorAll('span');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    btn.classList.toggle('paused');
    cont.classList.toggle('active');
});

spans.forEach((span) => {
    span.addEventListener('click', () => {
        btn.classList.toggle('active');
        btn.classList.toggle('paused');
        cont.classList.toggle('active');
    });
});