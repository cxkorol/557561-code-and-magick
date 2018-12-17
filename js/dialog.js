'use strict';

(function () {

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var NUM_WIZARDS = 4;

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

  // Функция сооздания блока сообщения об ошибке
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
