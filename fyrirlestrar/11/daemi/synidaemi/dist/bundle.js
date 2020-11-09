(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  // todo vísa í rétta hluti með import

  /**
   * Reikna út stig fyrir svör út frá heildarfjölda svarað á tíma.
   * Ekki þarf að gera ráð fyrir hversu lengi seinasta spurning var sýnd. Þ.e.a.s.
   * stig verða alltaf reiknuð fyrir n-1 af n spurningum.
   *
   * @param {number} total Heildarfjöldi spurninga
   * @param {number} correct Fjöldi svarað rétt
   * @param {number} time Tími sem spurningum var svarað á í sekúndum
   *
   * @returns {number} Stig fyrir svör
   */
  function score(total, correct, time) {
    var t = correct / total;
    return Math.round((Math.pow(t, 2) + correct) * total / time) * 100;
  }
  /**
   * Útbúa stigatöflu, sækir gögn í gegnum storage.js
   */

  var Highscore = /*#__PURE__*/function () {
    function Highscore() {
      _classCallCheck(this, Highscore);

      this.scores = document.querySelector('.highscore__scores');
      this.button = document.querySelector('.highscore__button');
      this.button.addEventListener('click', this.clear.bind(this));
    }
    /**
     * Hlaða stigatöflu inn
     */


    _createClass(Highscore, [{
      key: "load",
      value: function load() {// todo útfæra
      }
      /**
       * Hreinsa allar færslur úr stigatöflu, tengt við takka .highscore__button
       */

    }, {
      key: "clear",
      value: function clear() {// todo útfæra
      }
      /**
       * Hlaða inn stigatöflu fyrir gefin gögn.
       *
       * @param {array} data Fylki af færslum í stigatöflu
       */

    }, {
      key: "highscore",
      value: function highscore(data) {// todo útfæra
      }
    }]);

    return Highscore;
  }();

  /**
   * Úr sýnilausn fyrir verkefni 7.
   */
  var operators = ['+', '-', '*', '/'];
  /**
  * Skilar tölu af handahófi á bilinu [min, max]
  */

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  /**
  * Útbýr spurningu og skilar sem hlut:
  * { problem: strengur með spurningu, answer: svar við spurningu sem tala }
  */
  // eslint-disable-next-line import/prefer-default-export


  function createQuestion() {
    var operator = operators[randomNumber(0, operators.length - 1)];
    var a = null;
    var b = null;
    var answer = null;

    switch (operator) {
      case '+':
        a = randomNumber(10, 100);
        b = randomNumber(10, 100);
        answer = a + b;
        break;

      case '-':
        a = randomNumber(10, 100);
        b = randomNumber(10, a);
        answer = a - b;
        break;

      case '*':
        a = randomNumber(1, 10);
        b = randomNumber(1, 10);
        answer = a * b;
        break;

      case '/':
        b = randomNumber(2, 10);
        a = randomNumber(2, 10) * b;
        answer = a / b;
        break;
    }

    return {
      problem: "".concat(a, " ").concat(operator, " ").concat(b),
      answer: answer
    };
  }

  var startButton; // takki sem byrjar leik

  var problem; // element sem heldur utan um verkefni, sjá index.html

  var result; // element sem heldur utan um niðurstöðu, sjá index.html

  var playTime; // hversu lengi á að spila? Sent inn gegnum init()

  var total = 0; // fjöldi spurninga í núverandi leik

  var correct = 0; // fjöldi réttra svara í núverandi leik

  var currentProblem; // spurning sem er verið að sýna

  /**
   * Klárar leik. Birtir result og felur problem. Reiknar stig og birtir í result.
   */

  function finish() {
    problem.classList.add('problem--hidden');
    result.classList.remove('result--hidden');
    var points = score(total, correct, playTime);
    var resultText = result.querySelector('.result__text');
    var text = "\xDE\xFA svara\xF0ir ".concat(correct, " r\xE9tt af ").concat(total, " spurningum og f\xE9kkst ").concat(points, " stig fyrir. Skr\xE1\xF0u \xFEig \xE1 stigat\xF6fluna!");
    resultText.textContent = text; // todo útfæra
  }
  /**
   * Keyrir áfram leikinn. Telur niður eftir því hve langur leikur er og þegar
   * tími er búinn kallar í finish().
   *
   * Í staðinn fyrir að nota setInterval köllum við í setTimeout á sekúndu fresti.
   * Þurfum þá ekki að halda utan um id á intervali og skilum falli sem lokar
   * yfir fjölda sekúnda sem eftir er.
   *
   * @param {number} current Sekúndur eftir
   */


  function tick(current) {
    var timer = problem.querySelector('.problem__timer');
    timer.textContent = current;

    if (current <= 0) {
      return finish();
    }

    return function () {
      setTimeout(tick(current - 1), 1000);
    };
  }
  /**
   * Býr til nýja spurningu og sýnir undir .problem__question
   */


  function showQuestion() {
    total += 1;
    currentProblem = createQuestion();
    var question = problem.querySelector('.problem__question');
    question.textContent = currentProblem.problem;
  }
  /**
   * Byrjar leik
   *
   * - Felur startButton og sýnir problem
   * - Núllstillir total og correct
   * - Kallar í fyrsta sinn í tick()
   * - Sýnir fyrstu spurningu
   */


  function start() {
    startButton.classList.add('button--hidden');
    problem.classList.remove('problem--hidden');
    total = 0;
    correct = 0;
    setTimeout(tick(playTime), 1000);
    showQuestion();
  }
  /**
   * Event handler fyrir það þegar spurningu er svarað. Athugar hvort svar sé
   * rétt, hreinsar input og birtir nýja spurningu.
   *
   * @param {object} e Event þegar spurningu svarað
   */


  function onSubmit(e) {
    e.preventDefault();
    var input = e.target.querySelector('input');
    var answer = Number.parseInt(input.value, 10);

    if (currentProblem.answer === answer) {
      correct += 1;
    }

    input.value = '';
    showQuestion();
  }
  /**
   * Finnur öll element DOM og setur upp event handlers.
   *
   * @param {number} _playTime Fjöldi sekúnda sem hver leikur er
   */


  function init(_playTime) {
    playTime = _playTime;
    startButton = document.querySelector('.start');
    result = document.querySelector('.result');
    problem = document.querySelector('.problem');
    startButton.addEventListener('click', start);
    var scoreForm = document.querySelector('.problem__answer');
    scoreForm.addEventListener('submit', onSubmit);
  }

  var PLAY_TIME = 10;
  document.addEventListener('DOMContentLoaded', function () {
    init(PLAY_TIME);
    var highscore = new Highscore();
    highscore.load();
  });

}());
//# sourceMappingURL=bundle.js.map
