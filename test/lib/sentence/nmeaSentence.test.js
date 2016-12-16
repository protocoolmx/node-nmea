'use strict';

const assert = require('assert');
const NMEASentence = require('../../../lib/sentence/nmeaSentence');

describe('NMEASentence', function() {
  let nmeaSentence;

  let inputTest = '$GPRMC,180605.0,A,2905.099584,N,11058.190134,W,0.0,,161216,0.0,E,A*34';

  before('create NMEASentence instance', function() {
    nmeaSentence = new NMEASentence(inputTest);
  });

  describe('#getType()', function() {

    it('should return type of sentence provided', function() {
      let type = nmeaSentence.getType();

      assert.ok(type);
      assert.equal(type, 'RMC');
    });
  });

  describe('#getChecksum()', function() {

    it('should return checksum from sentence provided', function() {
      let checksum = nmeaSentence.getChecksum();

      assert.ok(checksum);
      assert.equal(checksum, '34');
    });
  });

  describe('#getElements()', function() {

    it('should return elements from sentence provided', function() {
      let elements = nmeaSentence.getElements();

      assert.ok(elements);
      assert.ok(elements.length > 0);
    });
  });
});
