'use strict';

(function () {

  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var userName = userDialog.querySelector('.setup-user-name'); // Окно имени персонажа
  var setupWizard = document.querySelector('.setup-wizard'); // Окно настроек персонажа
  var wizardCoat = setupWizard.querySelector('.wizard-coat'); // Элемент плаща
  var wizardEyes = setupWizard.querySelector('.wizard-eyes'); // Элемент глаз
  var wizardFireball = document.querySelector('.setup-fireball-wrap'); // Элемент файербола
  var wizardFireballInput = document.querySelector('[name=fireball-color]'); // Инпут фаербола
  var coatInput = userDialog.querySelector('[name=coat-color]'); // Инпут плаща волшебника
  var eyesInput = userDialog.querySelector('[name=eyes-color]'); // Инпут глаз волшебника
  var wizardColor = window.wizardsInfo;

  window.inputField = userName;

  // Функция изменения цвета и значения элемента
  var addChangeColorListener = function (colorsArr, element, valueElement) {
    element.addEventListener('click', function () {
      var elementColor = window.util.getRandomItem(colorsArr);
      element.style.fill = elementColor;
      valueElement.value = elementColor;
    });
  };

  // Изменение цвета файербола по клику
  wizardFireball.addEventListener('click', function () {
    var randomColor = window.util.getRandomItem(wizardColor.fireballColors);
    wizardFireball.style.backgroundColor = randomColor;
    wizardFireballInput.value = randomColor;
  });

  addChangeColorListener(wizardColor.coatColors, wizardCoat, coatInput); // Измнение цвета плащей по клику
  addChangeColorListener(wizardColor.eyesColors, wizardEyes, eyesInput); // Изменение цвета глаз по клику

})();
