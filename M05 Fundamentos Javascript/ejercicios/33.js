function esDivisible(dividendo, divisor) {
  return dividendo % divisor === 0;
}

function verificarPrimo(numero, divisor) {
  if (numero <= 1) {
    return false;
  }

  if (divisor === undefined) {
    divisor = 2;
  }

  if (divisor > Math.sqrt(numero)) {
    return true;
  }
 
  if (esDivisible(numero, divisor)) {
    return false;
  }

  return verificarPrimo(numero, divisor + 1);
}


function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  return verificarPrimo(numero);
}

module.exports = esNumeroPrimo;
