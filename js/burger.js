window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header__burger').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger_active')
    })
    document.querySelector('.header__burger_open').addEventListener('click', function() {
        document.querySelector('.burger').classList.toggle('burger_active')
    })
})