// UI
const iconbar = document.querySelector('nav .fa-bars');
const ulmenu = document.querySelector('nav .nav-menu');
// console.log(iconbar);

//Event Listener
iconbar.addEventListener('click',()=>ulmenu.classList.toggle('show'));