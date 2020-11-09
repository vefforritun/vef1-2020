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

  document.addEventListener('DOMContentLoaded', function () {
    var highscore = new Highscore();
    highscore.load();
  });

}());
//# sourceMappingURL=bundle.js.map
