'use strict';

const NMEASentence = require('./sentence/nmeaSentence');
const GPRMC = require('./sentence/gprmc');

module.exports = { gprmc };

function gprmc(sentence) {
  return new GPRMC(sentence).decode();
}
