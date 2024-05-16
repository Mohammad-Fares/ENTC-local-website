const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
});
const burger = document.querySelector('.hamburger');
burger.addEventListener('click', function () {
    this.classList.toggle('is-active');
})
