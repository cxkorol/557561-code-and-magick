'use strict';

(function () {

  // Стартовые координаты окна настроек
  var DEFAULT_START = {
    top: '80px',
    left: '50%'
  };

  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var userDialogOpen = document.querySelector('.setup-open'); // Окно с открытыми настройками пользователя
  var userDialogClose = userDialog.querySelector('.setup-close'); // Окно c закрытыми настройками пользователя
  var userName = userDialog.querySelector('.setup-user-name'); // Окно имени персонажа
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

  var onPopupEscPress = function (evt) {
    if (userName !== evt.target && evt.keyCode === ESC_KEY) {
      closePopup();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.querySelector('.setup-similar').classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    userDialog.style.top = DEFAULT_START.top;
    userDialog.style.left = DEFAULT_START.left;
  };

  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      openPopup();
    }
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      closePopup();
    }
  });
})();
