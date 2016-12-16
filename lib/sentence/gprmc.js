'use strict';

/**
 * GPRMC NMEA Sentence Decoder
 * @see http://aprs.gids.nl/nmea/#rmc
 *
 * @type {Class}
 */
const NMEASentence = require('./nmeaSentence');

class GPRMC extends NMEASentence {

  constructor(sentence) {
    super(sentence);

    this.sign = {
      timestamp: 'integer',
      status: 'string',
      latitude: 'float',
      ns: 'string',
      longitude: 'float',
      ew: 'string',
      speed: 'float',
      trueCourse: 'float',
      dateStamp: 'integer',
      variation: 'float',
      vew: 'string'
    };
  }

  /**
   * Decodes GPRMC sentence into key-value Object.
   *
   * @return {Object} GPRMC sentence Object.
   */
  decode() {

    let sentenceDecoded = {};
    let elements = this.getElements();

    Object.keys(this.sign).forEach((key, index) => {

      let value = elements[index];

      if (value) {
        switch (this.sign[key]) {
          case 'integer': {
            value = parseInt(value);
            break;
          }

          case 'float': {
            value = parseFloat(value);
            break;
          }

          default: value = value.toString();
        }

        sentenceDecoded[key] = value;
      }
    });

    sentenceDecoded.latitude = this.fixLL(sentenceDecoded.latitude);
    sentenceDecoded.longitude = this.fixLL(sentenceDecoded.longitude);

    // Append sentence checksum to resulting object.
    return Object.assign(sentenceDecoded, {
      checksum: this.getChecksum()
    });
  }

}

module.exports = GPRMC;
