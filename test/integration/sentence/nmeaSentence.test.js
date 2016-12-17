'use strict';

const assert = require('assert');
const NMEASentence = require('../../../lib/sentence/nmeaSentence');
const sentences = require('../../fixtures/getSentences');

describe('NMEASentence', function() {
  let nmeaSentence;

  let inputTest = sentences.RMC[0];

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
