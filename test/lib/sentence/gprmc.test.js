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

  describe('#decode()', function() {

    it('should decode from input with `trueCourse` missing', function() {
      let obj = gprmc.decode();

      assert(obj);
      assert(obj.trueCourse === undefined);
    });
  });
});
