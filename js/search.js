window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.header-top__btn_open').addEventListener('click', function() {
        document.querySelector('.header-top__form').classList.toggle('header-top__form_close')
    })
    document.querySelector('.header-top__btn_close').addEventListener('click', function() {
        document.querySelector('.header-top__form').classList.toggle('header-top__form_close')
    })
})