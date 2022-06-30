// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

// Can either do const { john, peter } = require('./4-names'); or do sayHi(names.john);
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

// Causes module to run even without saving to a variable
require('./7-mind-grenade');

// sayHi('susan');
// sayHi(john);
// sayHi(peter);

