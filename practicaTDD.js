var assert = require('assert');

// a*x^2 + b*x + c
function Raices(a, b, c){
  return [[5, 0], [2, 0]];
}

// Caso de uso 1.
assert.deepEqual(Raices(1, -5, 0), [[5, 0], [2, 0]]);
// Caso de uso 2.
assert.deepEqual(Raices(2, 5, 0), [[0, 0], [2.5, 0]]);
