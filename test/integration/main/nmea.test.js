'use strict';

const assert = require('assert');
const nmea = require('../../../index');
const sentences = require('../../fixtures/getSentences');

describe('nmea', function() {

  describe('#gprmc()', function() {

    it('should decode RMC Object from sentence', function() {
      assert(nmea.gprmc(sentences.RMC[0]));
    });
  });
});
