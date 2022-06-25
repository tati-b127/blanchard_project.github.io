// CHOICES

const gallerySelect = document.querySelector('.gallery__select');
const galleryChoices = new Choices(gallerySelect, {
    searchEnabled: false,
    itemSelectText: '',
});


// DROPDOWN

document.querySelectorAll('.dropdown__simplebar').forEach(dropdown => {
    new SimpleBar(dropdown, {
    autoHide: false,
    scrollbarMaxSize: 25,
  });
  })
  
  const btns = document.querySelectorAll('.header-bottom__btn');
  const dropdowns = document.querySelectorAll('.dropdown');
  const activeClassdropdowns = 'dropdown__active';
  const activeClassbtns = 'btn__active';
  
  btns.forEach(item => {
    item.addEventListener('click', function() {
      let DropThis = this.parentElement.querySelector('.dropdown');
      dropdowns.forEach(el => {
        if (el != DropThis) {
          el.classList.remove(activeClassdropdowns)
        }
      });
      btns.forEach(el => {
        if (el != this) {
          el.classList.remove(activeClassbtns)
        }
      });
      DropThis.classList.toggle(activeClassdropdowns);
      this.classList.toggle(activeClassbtns);
    })
  })

// MAP

ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 16,
    });
    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/point-map.svg',
        iconImageSize: [28, 40],
        iconImageOffset: [-14, -40]
    });
    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('searchControl');
    myMap.controls.remove('fullscreenControl');
    myMap.behaviors.disable('scrollZoom'); 
}

// INPUTMASK

var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+375 (99)999-99-99");
im.mask(selector);

// VALIDATE

const validate = new window.JustValidate('#form');
const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});
validation
    .addField('#name', [
        {
            rule: 'minLength',
            value: 2,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'maxLength',
            value: 30,
            errorMessage: 'Недопустимый формат',
        },
        {
            rule: 'required',
            errorMessage: 'Вы не ввели имя',
        }
    ])
    .addField('#tel', [
        {
            rule: 'required',
            errorMessage: 'Вы не ввели телефон',
        },
        {
            validator: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 9;
            },
            errorMessage: 'Недопустимый формат',
        },
    ]);

// TOOLTP


tippy('#tooltip_1', {
    theme: 'violet',
    content: 'Пример современных тенденций - современная методология разработки',
  });
  tippy('#tooltip_2', {
      theme: 'violet',
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  });
  tippy('#tooltip_3', {
      theme: 'violet',
    content: 'В стремлении повысить качество',
  });


