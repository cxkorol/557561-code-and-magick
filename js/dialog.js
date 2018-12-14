'use strict';

(function () {

  // Стартовые координаты окна настроек
  var DEFAULT_START = {
    top: '80px',
    left: '50%'
  };

  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var userDialogOpen = document.querySelector('.setup-open'); // Окно с открытыми настройками пользователя
  var userDialogClose = userDialog.querySelector('.setup-close'); // Окно c закрытыми настройками пользователя
  var userName = userDialog.querySelector('.setup-user-name'); // Окно имени персонажа
  var similarListElement = document.querySelector('.setup-similar-list');
  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  // Отрисовка похожих волшебников
  similarListElement.appendChild(window.similarWizards.getWizardFragment());

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
    window.util.onEnterEvent(evt, closePopup);
  });

})();
