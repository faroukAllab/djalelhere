//toggle menu on small screen
let navDrop = document.querySelector('.navbar');
let iconDrop = document.querySelector('#menu-icon');

iconDrop.onclick = () => {
    iconDrop.classList.toggle('bx-x');
    navDrop.classList.toggle('down');
}