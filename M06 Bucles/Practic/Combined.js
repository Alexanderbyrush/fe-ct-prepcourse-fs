function puedeVotar(edad, registrada) {
    if (edad >= 18 && registrada === 'Si') {
        console.log(true);
    } else {
        console.log(false);
    }
}

puedeVotar(30, 'Si')