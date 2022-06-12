document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.catalog-sourse__btn').forEach(function(tabLink) {
        tabLink.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.catalog-sourse__btn').forEach(function(link) {
                link.classList.remove('catalog-sourse__btn_active')});
                event.currentTarget.classList.add('catalog-sourse__btn_active');
            document.querySelectorAll('.catalog-preview__item').forEach(function(tabContent) {
                tabContent.classList.remove('catalog-preview__item_active')});
            document.querySelector(`[data-target="${path}"]`).classList.add('catalog-preview__item_active');
        })
    })
})