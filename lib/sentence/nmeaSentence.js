'use strict';

/**
 * NMEA Sentence Decoder
 * @see http://aprs.gids.nl/nmea/
 *
 * @type {Class}
 */
class NMEASentence {

  constructor(sentence) {

    this.typeRegex = /^\$GP(\w+),/;
    this.checksumRegex = /\*(.+)/;

    this.sentence = sentence;
  }

  /**
   * Extract a three-character NMEA sentence type.
   *
   * @return {String} NMEA sentence type
   */
  getType() {
    let result = this.sentence.match(this.typeRegex);

    return result ? result[1] : result;
  }

  /**
   * Extract checksum expressed as hexadecimal.
   *
   * @return {String} Checksum
   */
  getChecksum() {
    let result = this.sentence.match(this.checksumRegex);

    return result ? result[1] : result;
  }

  /**
   * Get all elements from sentence except for `type` and `checksum`.
   *
   * @return {Array} Sentence elements
   */
  getElements() {
    let result = this.sentence.replace(`*${this.getChecksum()}`, '').split(',');

    return result.slice(1);
  }

  /**
   * Moves decimal point two spaces to left.
   * @see http://aprs.gids.nl/nmea/#latlong
   *
   * @param {Number} ll - Raw latitude or longitude.
   * @return {Number} Latitude or longitude fixed.
   */
  fixLL(ll) {
    let rawLL = ll.toString();
    let dotIndex = rawLL.indexOf('.');
    let degrees = rawLL.substr(0, dotIndex - 2);
    let minutes = rawLL.substr(dotIndex - 2);

    return parseInt(degrees) + parseFloat(minutes) / 60;
  }

}

module.exports = NMEASentence;
