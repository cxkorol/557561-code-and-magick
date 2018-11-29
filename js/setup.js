'use strict';

(function () {

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

  // Массив цветов плащей волшебников
  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  // Массив цветов глаз волшебников
  var EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  // Количество волшебников
  var NUM_WIZARDS = 4;

  // Нахождение случайного числа
  var getRandom = function (upperBound) {
    return Math.floor(Math.random() * upperBound);
  };

  // Функция создания массива волшебников
  var createWizardsArray = function () {
    var wizards = [];
    for (var i = 0; i < NUM_WIZARDS; i++) {

      var wizardName = WIZARD_NAMES[getRandom(WIZARD_NAMES.length)] + ' ' + WIZARD_SECOND_NAMES[getRandom(WIZARD_SECOND_NAMES.length)];
      var coatColor = COAT_COLORS[getRandom(COAT_COLORS.length)];
      var eyesColor = EYE_COLORS[getRandom(EYE_COLORS.length)];

      // Cоздание объекта волшебников
      wizards[i] = {
        name: wizardName,
        coat: coatColor,
        eyes: eyesColor
      };
    }
    return wizards;
  };

  var wizards = createWizardsArray(); // Создание массива волшебников
  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var similarListElement = document.querySelector('.setup-similar-list'); // Блок с похожими волшебниками
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент для вставки похожих волшебников

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
  similarListElement.appendChild(getWizardFragment());

  userDialog.classList.remove('hidden');
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

})();
