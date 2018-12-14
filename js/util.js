'use strict';

window.util = (function () {
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
    getRandom: getRandom,
    getRandomUp: getRandomUp,
    getRandomItem: getRandomItem,
    addChangeColorListener: addChangeColorListener
  };
})();
