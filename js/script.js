let hamBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let menuItem = document.getElementsByClassName('header__link')
let body = document.querySelector('body');

hamBtn.addEventListener('click', function(){
    hamBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})
for (let index = 0; index < menuItem.length; index++){
    menuItem[index].addEventListener('click', function () {
        menu.classList.remove('active')
        hamBtn.classList.remove('active')
        body.classList.remove('active')
    })
}