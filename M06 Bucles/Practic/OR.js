function puedeConducir(edad, licencia) {
    if (edad > 18 || licencia === 'Si')console.log(true);
    else console.log(false);
}

puedeConducir(12, 'Si')


// otra forma

function puedeConducir(edad, licencia) {
    return (edad > 18 || licencia === 'Si');
}

var resultado = puedeConducir(12, 'Si');

if (resultado) {
    console.log("La persona puede conducir.");
} else {
    console.log("La persona no puede conducir.");
}