const retornarPerimetro = require('../ejercicios/30');

test('Debe retornar el perímetro correcto del cuadrado', function () {
  expect(retornarPerimetro(10)).toBe(40);
  expect(retornarPerimetro(20)).toBe(80);
  expect(retornarPerimetro(0)).toBe(0);
});
