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

  // Функция создания массива волшебников
  var createWizardsArray = function () {
    var wizards = [];
    for (var i = 0; i < NUM_WIZARDS; i++) {

      var wizardName = WIZARD_NAMES[window.util.getRandomUp(WIZARD_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[window.util.getRandomUp(WIZARD_SECOND_NAMES.length)];
      var coatColor = window.wizardsInfo.coatColors[window.util.getRandomUp(window.wizardsInfo.coatColors.length)];
      var eyesColor = window.wizardsInfo.eyesColors[window.util.getRandomUp(window.wizardsInfo.eyesColors.length)];

      wizards[i] = {
        name: wizardName,
        coat: coatColor,
        eyes: eyesColor
      };
    }
    return wizards;
  };

  return {
    createWizardsArray: createWizardsArray,
  };
})();
