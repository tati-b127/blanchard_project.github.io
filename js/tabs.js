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

// MOBILE SCROLL

(() => {
	const MOBILE_WIDTH = 768;

	function getWindowWidth () {
	  return Math.max(
	    document.body.scrollWidth,
	    document.documentElement.scrollWidth,
	    document.body.offsetWidth,
	    document.documentElement.offsetWidth,
	    document.body.clientWidth,
	    document.documentElement.clientWidth
	  );
	}

	function scrollToContent (link, isMobile) {
		if (isMobile && getWindowWidth() > MOBILE_WIDTH) {
			return;
		}

	  const href = link.getAttribute('data-path').substring(1);
	  const scrollTarget = document.getElementsByName(href);
	  const elementPosition = scrollTarget.getBoundingClientRect().top;

	  window.scrollBy({
	      top: elementPosition,
	      behavior: 'smooth'
	  });
	}

	document.querySelectorAll('.artist__btn').forEach(link => {
	  link.addEventListener('click', function(e) {
	      e.preventDefault();

	      scrollToContent(this, true);
	  });
	});
})();