const menu = document.querySelector('#menu-mobile');
const menuLinks = document.querySelect('#menu-nav');
menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menu.classList.toggle('active');
})