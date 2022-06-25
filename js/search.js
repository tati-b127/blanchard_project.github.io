window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header-top__btn_open').addEventListener('click', function() {
        document.querySelector('.header-top__form').classList.add('header-top__form_open')
    })
    document.querySelector('.header-top__btn_close').addEventListener('click', function() {
        document.querySelector('.header-top__form').classList.remove('header-top__form_open')
    })
    document.querySelector('.header-top__form').addEventListener('submit', function(e) {
        e.preventDefault()
    })
    document.querySelector('.header-bottom__form').addEventListener('submit', function(e) {
        e.preventDefault()
    })
})