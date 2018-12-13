'use strict';

window.similarWizards = (function () {

  // Массив имён волшебников
  var WIZARD_NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  // Массив фамилий волшебников
  var WIZARD_SECOND_NAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  // Количество волшебников
  var NUM_WIZARDS = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент для вставки похожих волшебников

  // Функция создания массива волшебников
  var createWizardsArray = function () {
    var wizards = [];
    for (var i = 0; i < NUM_WIZARDS; i++) {

      var wizardName = WIZARD_NAMES[window.util.getRandomUp(WIZARD_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[window.util.getRandomUp(WIZARD_SECOND_NAMES.length)];
      var coatColor = window.wizardsInfo.coatColors[window.util.getRandomUp(window.wizardsInfo.coatColors.length)];
      var eyesColor = window.wizardsInfo.eyesColors[window.util.getRandomUp(window.wizardsInfo.eyesColors.length)];

      // Cоздание объекта волшебников
      wizards[i] = {
        name: wizardName,
        coat: coatColor,
        eyes: eyesColor
      };
    }
    return wizards;
  };

  // Создание и отрисовка шаблона волшебников
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyes;

    return wizardElement;
  };

  // Заполнение блока волшебников
  var getWizardFragment = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  var wizards = createWizardsArray();

  return {
    getWizardFragment: getWizardFragment
  };
})();
