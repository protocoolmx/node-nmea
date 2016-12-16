# node-nmea

[![npm version](https://badge.fury.io/js/nmea-decoder.svg)](https://badge.fury.io/js/nmea-decoder)

Decoder for NMEA Sentences.

NMEA Sentences supported

* RMC

## Install

```
$ npm install nmea-decoder --save
```

## Usage

```javascript
const nmea = require('nmea-decoder');

// Decode RMC Sentence
let result = nmea.gprmc('$GPRMC,180605.0,A,2905.099584,N,11058.190134,W,0.0,,161216,0.0,E,A*34');

// output
//
// {
//   timestamp: 180605,
//   status: 'A',
//   latitude: 29.05099584,
//   ns: 'N',
//   longitude: 110.58190134,
//   ew: 'W',
//   speed: 0,
//   dateStamp: 161216,
//   variation: 0,
//   vew: 'E',
//   checksum: '34'
// }
```

## Type Definitions

#### RMC

* `timestamp` (number) : UTC of position fix.
* `status` (string) : Data status (A=ok, V=invalid).
* `latitude` (number) : Current latitude.
* `ns` (string) : n=North, s=South.
* `longitude` (number) : Current longitude.
* `ew` (string) : e=East, w=West.
* `speed` (number) : Speed over ground in knots.
* `trueCourse` (number) : Track made good in degrees True.
* `dateStamp` (number) : UT Date.
* `variation` (number) : Magnetic variation degrees (Easterly var. subtracts from true course).
* `vew` (string) : e=East, w=West.
* `checksum` (string) : Checksum.

## Test

```
$ npm test
```

## Reference

http://aprs.gids.nl/nmea

## Licence

[MIT](LICENCE)
