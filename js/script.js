var formToggleButton = document.querySelector('.button-show-form');
var form = document.querySelector('.appointment-form');
var dateIn = document.querySelector('[name=date-in]');
var dateOut = document.querySelector('[name=date-out]');
var adultsAmount = document.querySelector('[name=adults]');
var childrenAmount = document.querySelector('[name=children]');

//var adultStorage = localStorage.getItem('adults');

var adultsLessButton = document.querySelector('.adults-less');
var adultsMoreButton = document.querySelector('.adults-more');
var childrenLessButton = document.querySelector('.children-less');
var childrenMoreButton = document.querySelector('.children-more');

var formSearchButton = document.querySelector('.button-search');
var filterButton = document.querySelector('.button-show');
var filterForm = document.querySelector('.form-filter');

if (form) {
  form.classList.add('form-hidden'); // скрываем форму поиска при загрузке страницы
}

if (formToggleButton) {
  formToggleButton.addEventListener('click', function(evt) {
    evt.preventDefault(); // на случай переопределения кнопки
    form.classList.toggle('form-hidden');
    if (!form.classList.contains('form-hidden')) {
      dateIn.focus();
      var adultStorage = localStorage.getItem('adults');
      adultsAmount.value = adultStorage;
      var childrenStorage = localStorage.getItem('children');
      childrenAmount.value = childrenStorage;
     }
  });
}

// подсчет детей и взрослых кнопками + и -
if (adultsLessButton && adultsAmount) {
  adultsLessButton.addEventListener('click', function(evt) {
    evt.preventDefault; // на случай переопределения кнопки
    adultsAmount.value = Math.round(adultsAmount.value) - 1; //округление для защиты от приколистов
  });
}

if (adultsMoreButton && adultsAmount) {
  adultsMoreButton.addEventListener('click', function(evt) {
    evt.preventDefault; // на случай переопределения кнопки
    adultsAmount.value = Math.round(adultsAmount.value) + 1; //округление для защиты от приколистов
  });
}

if (childrenLessButton && childrenAmount) {
  childrenLessButton.addEventListener('click', function(evt) {
    evt.preventDefault; // на случай переопределения кнопки
    childrenAmount.value = Math.round(childrenAmount.value) - 1; //округление для защиты от приколистов
  });
}

if (childrenMoreButton && childrenAmount) {
  childrenMoreButton.addEventListener('click', function(evt) {
    evt.preventDefault; // на случай переопределения кнопки
    childrenAmount.value = Math.round(childrenAmount.value) + 1; //округление для защиты от приколистов
  });
}

if (formSearchButton) {
  formSearchButton.addEventListener('click', function(evt) {
    if (!dateIn.value || !dateOut.value || !adultsAmount.value || adultsAmount.value <= 0 || childrenAmount.value < 0 || (adultsAmount.value ^ 0) != adultsAmount.value || (childrenAmount.value ^ 0) != childrenAmount.value) {
      evt.preventDefault();
      form.classList.remove('form-error');
      form.offsetWidth = form.offsetWidth;
      form.classList.add('form-error');
    } else {
      if (form.classList.contains('form-error')) {
        form.classList.remove('form-error');
        form.submit();
      }
      localStorage.setItem('adults', adultsAmount.value);
      localStorage.setItem('children', childrenAmount.value);
    }
  });
}

// страница hotels.html
if (filterButton) {
  filterButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    filterForm.submit();
  });
}




