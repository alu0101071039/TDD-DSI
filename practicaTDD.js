var assert = require('assert');

// a*x^2 + b*x + c
function Raices(a, b, c){

  var Discriminante = b*b - 4 * a * c;
  var RaizDiscriminante;
  var RaizReal1, RaizReal2, RaizImaginaria1, RaizImaginaria2;
  var DobleA = 2 * a;

  if(Discriminante > 0){
    var RaizDiscriminante = Math.sqrt(Discriminante);
    var RaizReal1 = (-b + RaizDiscriminante) / DobleA;
    var RaizReal2 = (-b - RaizDiscriminante) / DobleA;
    var RaizImaginaria1 = 0;
    var RaizImaginaria2 = 0;
  }else{
    var RaizDiscriminante = Math.sqrt(-Discriminante);
    var RaizReal1 = -b / DobleA;
    var RaizReal2 = -b / DobleA;
    var RaizImaginaria1 = RaizDiscriminante / DobleA;
    var RaizImaginaria2 = -RaizDiscriminante / DobleA;
  }

  return [[RaizReal1, RaizImaginaria1], [RaizReal2, RaizImaginaria2]];
}

// Caso de uso 1.
assert.deepEqual(Raices(1, -5, 0), [[5, 0], [0, 0]]);
// Caso de uso 2.
assert.deepEqual(Raices(2, 5, 0), [[0, 0], [-2.5, 0]]);
// Caso de uso 3.
assert.deepEqual(Raices(1, 5, 0), [[0, 0], [-5, 0]]);
// Caso de uso 4 - Raices imaginarias.
assert.deepEqual(Raices(1, 0, 1), [[0, 1], [0, -1]]);
// Caso de uso 5 - Raices imaginarias.
assert.deepEqual(Raices(1, -2, 5), [[1, 2], [1, -2]]);
