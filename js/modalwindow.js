document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-gallery__btn').forEach(function (modal) {
        modal.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            // event.currentTarget.classList.toggle('swiper-galary__modal_visible');
            document.querySelector('.body').classList.toggle('body_noscroll');
            document.querySelectorAll('.fixed-overlay').forEach(function (overlay) {
                overlay.classList.toggle('fixed-overlay_visible')
            });
            document.querySelector(`[data-target="${path}"]`).classList.toggle('swiper-gallery__modal_visible');
        })
    })
    document.querySelectorAll('.modal__btn-close').forEach(function (modalClose) {
        modalClose.addEventListener('click', function () {
            document.querySelectorAll('.swiper-gallery__modal').forEach(function (hidden) {
                hidden.classList.remove('swiper-gallery__modal_visible');
            })
            document.querySelector('.fixed-overlay').classList.remove('fixed-overlay_visible');            
            document.querySelector('.body').classList.toggle('body_noscroll');
        })
    });

})
