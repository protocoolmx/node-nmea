'use strict';

/**
 * NMEA Sentence Decoder
 * @see http://aprs.gids.nl/nmea/
 *
 * @type {Class}
 */
class NMEASentence {

  constructor(sentence) {
    this.sentence = sentence;
  }

  /**
   * Extract a three-character NMEA sentence type.
   *
   * @return {String} NMEA sentence type
   */
  getType() {
    let result = this.sentence.match(/^\$GP(\w+),/);

    return result ? result[1] : result;
  }

  /**
   * Extract checksum expressed as hexadecimal.
   *
   * @return {String} Checksum
   */
  getChecksum() {
    let result = this.sentence.match(/\*(.+)/);

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
   * @return {Number} Latitude or longitude fixed.
   */
  fixLL(ll) {
    return parseFloat(ll) / 100;
  }

}

module.exports = NMEASentence;
