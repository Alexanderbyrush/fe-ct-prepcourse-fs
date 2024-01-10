//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

console.log('--------');
//Igualdad vs igualdad estricta 
console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); 
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");


//Asignación y asociatividad
var a = 1;
var b = 2;
var c = (a = b);
console.log (a); // 2
console.log(b); // 2
console.log(c); // 2


// operaciones en orden with  asociatividad
console.log(16 / 2 / 4);