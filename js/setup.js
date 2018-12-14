'use strict';

(function () {

  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var setupWizard = document.querySelector('.setup-wizard'); // Окно настроек персонажа
  var wizardCoat = setupWizard.querySelector('.wizard-coat'); // Элемент плаща
  var wizardEyes = setupWizard.querySelector('.wizard-eyes'); // Элемент глаз
  var wizardFireball = document.querySelector('.setup-fireball-wrap'); // Элемент файербола
  var wizardFireballInput = document.querySelector('[name=fireball-color]'); // Инпут фаербола
  var coatInput = userDialog.querySelector('[name=coat-color]'); // Инпут плаща волшебника
  var eyesInput = userDialog.querySelector('[name=eyes-color]'); // Инпут глаз волшебника
  var wizardColor = window.wizardsInfo;

  window.util.addChangeColorListener(wizardColor.fireballColors, wizardFireball, wizardFireballInput);
  window.util.addChangeColorListener(wizardColor.coatColors, wizardCoat, coatInput);
  window.util.addChangeColorListener(wizardColor.eyesColors, wizardEyes, eyesInput);

})();
