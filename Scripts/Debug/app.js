const debug = require('debug')('debug-mode');


var name = 'fred';
var age = 32;


console.log('my name is' + name + '...from console.log');
console.log('my age is' + age + '...from console.log');

debug('my name is' + name + '...from dubug')
debug('my age is' + age + '...from debug')

debug('this stuff works man')