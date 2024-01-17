let dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Es es el 1  dia de la semana");
    break;
  case "martes":
    console.log("Es es el 2  dia de la semana");
    break;
  case "miercoles":
    console.log("Es es el 3  dia de la semana");
    break;
  case "jueves":
    console.log("Es es el 4  dia de la semana");
    break;
  case "viernes":
    console.log("Es es el 5  dia de la semana");
    break;
  case "sabado":
    console.log("Es es el 6  dia de la semana");
    break;
  case "domingo":
    console.log("Es es el 7  dia de la semana");
    break;
  default:
    console.log("No Es un dia de la semana");
}

function ingresa(num) {
  if (num >= 1 && num <= 7) {
    return num;
  } else {
    console.log("Numero de dia no es valido. Debe estar entre 1 y 7");
  }
}

const resul = ingresa("hola");

if (resul !== null) {
  switch (resul) {
    case 1:
      console.log("Es es el 1  dia de la semana");
      break;
    case 2:
      console.log("Es es el 2  dia de la semana");
      break;
    case 3:
      console.log("Es es el 3  dia de la semana");
      break;
    case 4:
      console.log("Es es el 4  dia de la semana");
      break;
    case 5:
      console.log("Es es el 5  dia de la semana");
      break;
    default:
      break;
  }
}

console.log('---------------------------------------------------');
console.log('Do-while');
console.log('---------------------------------------------------');

// Do-while

let contador = 1;
do {
  console.log("Iterar numero " + contador);
  contador++;
} while (contador <= 5);


console.log('---------------------------------------------------');
console.log('Continue');
console.log('---------------------------------------------------');

// Declacion continue

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log("Numero " + i);
}

console.log('---------------------------------------------------');
console.log('Break');
console.log('---------------------------------------------------');

// Declaracion Break
for (let i = 0; i <= 20; i++) {
  if (i === 6) {
    break;
  }  
  console.log("Numero" + i);
  if (i === 6) {
    i = i =+ i
    console.log('---- Salto de linea para ver el resultado ');
    console.log(i);
  }
}


let objetivo = 6
let intentos = 0

do {
  let resultadoDado = Math.floor(Math.random() * 6) +1;

  intentos++

  console.log(`Intento ${intentos}: Se obtuvo un ${resultadoDado}`);

  switch (resultadoDado) {
    case objetivo:
      console.log(`Felicidades! Obtuviste el numero ${objetivo} en el intento ${intentos}`);
      break;
    case 1:
      console.log("Obtuviste un 1. Vuelve a intentarlo" );
      continue
    default:
      console.log("No es el numero que buscas. Sigue Intentando");
  }
} while (true); // Infinitamente