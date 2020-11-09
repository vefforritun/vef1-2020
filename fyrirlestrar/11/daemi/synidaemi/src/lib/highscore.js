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
export function score(total, correct, time) {
  // todo útfæra
}

/**
 * Útbúa stigatöflu, sækir gögn í gegnum storage.js
 */
export default class Highscore {
  constructor() {
    this.scores = document.querySelector('.highscore__scores');
    this.button = document.querySelector('.highscore__button');

    this.button.addEventListener('click', this.clear.bind(this));
  }

  /**
   * Hlaða stigatöflu inn
   */
  load() {
    // todo útfæra
  }

  /**
   * Hreinsa allar færslur úr stigatöflu, tengt við takka .highscore__button
   */
  clear() {
    // todo útfæra
  }

  /**
   * Hlaða inn stigatöflu fyrir gefin gögn.
   *
   * @param {array} data Fylki af færslum í stigatöflu
   */
  highscore(data) {
    // todo útfæra
  }
}
