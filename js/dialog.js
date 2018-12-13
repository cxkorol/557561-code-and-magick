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

  window.inputField = userName;

  // Отрисовка похожих волшебников
  similarListElement.appendChild(window.similarWizards.getWizardFragment());

  // Функция закрытия окна настроек нажатием клавиши ESC
  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
  };

  // Функция открытия окна настроек
  var openPopup = function () {
    userDialog.classList.remove('hidden');
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  // Функция закрытия окна настроек
  var closePopup = function () {
    userDialog.classList.add('hidden');
    userDialog.querySelector('.setup-similar').classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    userDialog.style.top = DEFAULT_START.top;
    userDialog.style.left = DEFAULT_START.left;
  };

  // Открытие окна настроек по клику
  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  // Открытие окна настроек по нажатию клавиши Enter
  userDialogOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });

  // Закрытие окна настроек по клику
  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  // Закрытие окна настроек по нажанию клавиши Enter
  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

})();
