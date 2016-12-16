'use strict';

const assert = require('assert');
const GPRMC = require('../../../lib/sentence/gprmc');

describe('GPRMC', function() {

  let gprmc;
  let inputTest = '$GPRMC,180605.0,A,2905.099584,N,11058.190134,W,0.0,,161216,0.0,E,A*34';

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
