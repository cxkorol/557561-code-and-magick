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
  var form = userDialog.querySelector('.setup-wizard-form');
  var ESC_KEY = 27;
  var ENTER_KEY = 13;
  var NUM_WIZARDS = 4;

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // Фунция создания и отрисовки шаблона волшебников
  var renderWizard = function (wizard) {

    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент для вставки похожих волшебников
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  // Заполнение блока волшебников
  var getWizardFragment = function (wizards) {
    var similarListElement = document.querySelector('.setup-similar-list');
    var fragment = document.createDocumentFragment();
    window.similarWizards.createWizardsArray = wizards;

    for (var i = 0; i < NUM_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);

    return;
  };

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

  var formSubmitSuccessHandler = function () {
    userDialog.classList.add('hidden');
  };

  var formSubmitErrorHandler = function (errorMessage) {
    window.render.renderError(errorMessage);
  };

  var formSubmitHandler = function (evt) {
    window.backend.save(new FormData(form), formSubmitSuccessHandler, formSubmitErrorHandler);
    evt.preventDefault();
  };

  form.addEventListener('submit', formSubmitHandler);
  window.backend.load(getWizardFragment, errorHandler);

})();
