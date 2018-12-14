'use strict';

window.util = (function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  // Фунция нахождения случайного числа (верхнее значение)
  var getRandomUp = function (upperBound) {
    return Math.floor(Math.random() * upperBound);
  };

  // Нахождение случайного числа (диапазон)
  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  // Функция нахождения случайного элемента массива
  var getRandomItem = function (arr) {
    return arr[getRandomUp(arr.length)];
  };

  // Функция изменения цвета и значения элемента
  var addChangeColorListener = function (colorsArr, element, valueElement) {

    return element.addEventListener('click', function (evt) {
      evt.preventDefault();

      var elementColor = window.util.getRandomItem(colorsArr);

      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = elementColor;
      } else {
        element.style.fill = elementColor;
      }

      valueElement.value = elementColor;

    });
  };

  return {
    onEscEvent: function (evt, action) {
      if ((evt.keyCode === ESC_KEYCODE) && (evt.target !== window.inputField)) {
        action();
      }
    },
    onEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandom: getRandom,
    getRandomUp: getRandomUp,
    getRandomItem: getRandomItem,
    addChangeColorListener: addChangeColorListener
  };
})();
