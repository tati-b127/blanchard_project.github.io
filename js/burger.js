window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.burger__btn').addEventListener('click', function() {
        document.querySelector('.burger').classList.add('burger_active')
    })
    document.querySelector('.burger__btn_open').addEventListener('click', function() {
        document.querySelector('.burger').classList.remove('burger_active')
    })
})