var assert = require('assert');

// a*x^2 + b*x + c
function Raices(a, b, c){

  var Discriminante = Math.sqrt(b*b - 4 * a * c);

  var Raiz1 = (-b + Discriminante) / (2 * a);
  var Raiz2 = (-b - Discriminante) / (2 * a);

  return [[Raiz1, 0], [Raiz2, 0]];
}

// Caso de uso 1.
assert.deepEqual(Raices(1, -5, 0), [[5, 0], [0, 0]]);
// Caso de uso 2.
assert.deepEqual(Raices(2, 5, 0), [[0, 0], [-2.5, 0]]);
// Caso de uso 3.
assert.deepEqual(Raices(1, 5, 0), [[0, 0], [-5, 0]]);
// Caso de uso 4 - Raices imaginarias.
assert.deepEqual(Raices(1, 0, 1), [[0, 2], [0, -2]]);
