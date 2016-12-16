'use strict';

const fs = require('fs');

module.exports = getJSONFromFile('test/fixtures/sentences.json');

function getJSONFromFile(path) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}
