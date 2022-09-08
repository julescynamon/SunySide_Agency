const button = document.querySelector('.burger');
const menuMobile = document.querySelector('.nav-card');


button.addEventListener('click', (e) => {
    if (menuMobile.style.display === 'none') {
        menuMobile.style.display = 'block';
    } else {
        menuMobile.style.display = 'none';
    }
});