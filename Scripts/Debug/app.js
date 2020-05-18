const debug = require('debug')('debug-mode');


var name = 'fred';
var age = 32;


console.log(name + '...from console.log');
console.log(age + '...from console.log');

debug(name + '...from dubug')
debug(age + '...from debug')

debug('this stuff works man')