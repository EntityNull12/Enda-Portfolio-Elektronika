// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('nav');
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// hamburger
const navbarmobile = document.querySelector('.nav-mobile');
const hamburger = document.querySelector('#hamburger');
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navbarmobile.classList.toggle('navbar-mobile-active');
});

// coming soon

const comingsoon = document.querySelector('.coming-soon');
comingsoon.addEventListener('click', function(){
    alert('Akan hadir, maaf ya!!!');
});
