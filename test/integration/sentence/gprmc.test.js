'use strict';

const assert = require('assert');
const GPRMC = require('../../../lib/sentence/gprmc');
const sentences = require('../../fixtures/getSentences');

describe('GPRMC', function() {

  let gprmc;
  let inputTest = sentences.RMC[0];

  before('create GPRMC instance with test input', function() {
    gprmc = new GPRMC(inputTest);
  });

  describe('#constructor()', function() {

    it('should throw error due to invalid sentence type', function() {
      try {
        let gprmc = new GPRMC('INVALID');
      } catch (e) {
        assert.equal(e.message, 'Input sentence provided is not of RMC type.');
      }
    });
  });

  describe('#decode()', function() {

    it('should decode from input with `trueCourse` missing', function() {
      let obj = gprmc.decode();

      assert(obj);
      assert(obj.trueCourse === undefined);
    });
  });
});
