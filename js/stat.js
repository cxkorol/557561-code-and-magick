'use strict';

window.renderStatistics = function (ctx, names, times) {

  var CLOUD_WIDTH = 420; // Ширина облака статистики
  var CLOUD_HEIGHT = 270; // Высота облака статистики
  var CLOUD_X = 100; // Стартовые координаты поля статистики по оси Х
  var CLOUD_Y = 10; // Стартовые координаты поля статистики по оси Х
  var GAP = 10; // Смещение для облака
  var MAX_HEIGHT_BAR = 150; // Максимальная высота столбцов
  var GAP_BAR = 50; // Промежуток между столбцами
  var WIDTH_BAR = 40; // Ширина столбца
  var RESULT_POSITION_X = 150; // Начальная позиция для начала отрисовки результатов статистики по оси Х
  var PLAYER_NAME_POSITION_Y = 250; // Начальная позиция имени игрока по оси Y
  var PLAYER_BAR_POSITION_Y = 100; // Начальная позиция столбца игрока по оси Y

  // Функия отрисовки поля статистики
  var renderCloud = function (x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  // Функция отрисовки текста статистики
  var renderText = function () {
    var textLines = [
      'Ура вы победили!',
      'Список результатов:'
    ];
    var textLinesX = 105; // Стартовые координаты текстового поля по оси Х
    var textLinesY = 20; // Cтартовые координаты текстового поля по оси Y

    ctx.fillStyle = '#000000';
    ctx.font = 'bold 16px PT Mono';
    ctx.textBaseline = 'hanging';

    for (var i = 0; i < textLines.length; i++) {
      textLinesY += 20;
      ctx.fillText(textLines[i], textLinesX, textLinesY);
    }
  };

  // Нахождение максимального элемента в массиве времени прохождения игроков
  var getMaxTime = function () {
    var maxElement = times[0];

    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxElement) {
        maxElement = times[i];
      }
    }

    return maxElement;
  };

  // Нахождение случайного числа
  var getRandom = function (min, max) {
    return Math.random() * (max - min) + min;
  };

  renderCloud(CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)'); // Отрисовка тени поля статистики
  renderCloud(CLOUD_X, CLOUD_Y, '#fff'); // Отрисовка поля статистики
  renderText(); // Отрисовка текста статистики

  var maxTime = getMaxTime(); // Записывает максимальное значение массива в переменную

  for (var i = 0; i < names.length; i++) {
    var сolorSaturationRandom = getRandom(0.2, 1); // Случайное значение
    var heightBarPlayer = (MAX_HEIGHT_BAR * times[i]) / maxTime; // Расчет высоты столбца игрока
    var textTimesPositionY = MAX_HEIGHT_BAR - heightBarPlayer - 20; // Расположение текста с результатом по оси Y

    // Отрисовка имени игрока
    ctx.fillText(names[i],
        RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR),
        PLAYER_NAME_POSITION_Y + GAP
    );

    ctx.fillStyle = 'rgba(0, 0, 255, ' + сolorSaturationRandom + ')'; // Заливка столбцов цветом со случайной насыщенностью

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)'; // Заливка столбца игрока
    }

    // Отрисовка столбца игрока
    ctx.fillRect(
        RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR),
        PLAYER_BAR_POSITION_Y + MAX_HEIGHT_BAR - heightBarPlayer,
        WIDTH_BAR,
        heightBarPlayer
    );

    // Отрисовка результата игрока
    ctx.fillStyle = '#000000';
    ctx.fillText(
        Math.round(times[i]),
        RESULT_POSITION_X + i * (GAP_BAR + WIDTH_BAR),
        PLAYER_BAR_POSITION_Y + textTimesPositionY
    );
  }
};

