document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.swiper-gallery__btn').forEach(function (modal) {
        modal.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.swiper-gallery__modal').forEach(function (link) {
                link.classList.add('swiper-galary__modal_visible')
            });
            event.currentTarget.classList.add('swiper-galary__modal_visible');
            document.querySelectorAll('.fixed-overlay').forEach(function (overlay) {
                overlay.classList.add('fixed-overlay_visible')
            });
            document.querySelector(`[data-target="${path}"]`).classList.add('swiper-gallery__modal_visible');
        })
    })
    document.querySelectorAll('.modal__btn-close').forEach(function (modalClose) {
        modalClose.addEventListener('click', function () {
            document.querySelector('.swiper-gallery__modal').classList.remove('swiper-gallery__modal_visible');
            document.querySelector('.fixed-overlay').classList.remove('fixed-overlay_visible')
        })
    });

})
