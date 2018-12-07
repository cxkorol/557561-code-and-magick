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

  // Массив цветов фаерболов
  var FIREBALL_WRAP = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  // Количество волшебников
  var NUM_WIZARDS = 4;

  // Коды клавиатурных клавиш
  var ESC_KEY = 27;
  var ENTER_KEY = 13;

  var userDialog = document.querySelector('.setup'); // Окно настроек пользователя
  var userDialogOpen = document.querySelector('.setup-open'); // Окно с открытыми настройками пользователя
  var userDialogClose = userDialog.querySelector('.setup-close'); // Окно c закрытыми настройками пользователя
  var similarListElement = document.querySelector('.setup-similar-list'); // Блок с похожими волшебниками
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item'); // Элемент для вставки похожих волшебников
  var userName = userDialog.querySelector('.setup-user-name'); // Окно имени персонажа
  var setupWizard = document.querySelector('.setup-wizard'); // Окно настроек персонажа
  var wizardCoat = setupWizard.querySelector('.wizard-coat'); // Элемент плаща
  var wizardEyes = setupWizard.querySelector('.wizard-eyes'); // Элемент глаз
  var wizardFireball = document.querySelector('.setup-fireball-wrap'); // Элемент файербола
  var wizardFireballInput = document.querySelector('[name=fireball-color]'); // Инпут фаербола
  var coatInput = userDialog.querySelector('[name=coat-color]'); // Инпут плаща волшебника
  var eyesInput = userDialog.querySelector('[name=eyes-color]'); // Инпут глаз волшебника

  // Фунция нахождения случайного числа
  var getRandom = function (upperBound) {
    return Math.floor(Math.random() * upperBound);
  };

  // Функция нахождения случайного элемента массива
  var getRandomItem = function (arr) {
    return arr[getRandom(arr.length)];
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

  // Функция изменения цвета и значения элемента
  var addChangeColorListener = function (colorsArr, element, valueElement) {
    element.addEventListener('click', function () {
      var elementColor = getRandomItem(colorsArr);
      element.style.fill = elementColor;
      valueElement.value = elementColor;
    });
  };

  // Функция закрытия окна настроек нажатием клавиши ESC
  var onPopupEscPress = function (evt) {
    if (userName !== evt.target && evt.keyCode === ESC_KEY) {
      closePopup();
    }
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
  };

  // Открытие окна настроек по клику
  userDialogOpen.addEventListener('click', function () {
    openPopup();
  });

  // Открытие окна настроек по нажатию клавиши Enter
  userDialogOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      openPopup();
    }
  });

  // Закрытие окна настроек по клику
  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  // Закрытие окна настроек по нажанию клавиши Enter
  userDialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEY) {
      closePopup();
    }
  });

  var wizards = createWizardsArray(); // Создание массива волшебников
  similarListElement.appendChild(getWizardFragment()); // Добавление одинаковых волшебников

  addChangeColorListener(COAT_COLORS, wizardCoat, coatInput); // Измнение цвета плащей по клику
  addChangeColorListener(EYE_COLORS, wizardEyes, eyesInput); // Изменение цвета глаз по клику

  // Изменение цвета файербола по клику
  wizardFireball.addEventListener('click', function () {
    var randomColor = getRandomItem(FIREBALL_WRAP);
    wizardFireball.style.backgroundColor = randomColor;
    wizardFireballInput.value = randomColor;
  });
})();
