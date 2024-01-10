function viajar (destino) {
    if (destino === "Brasil") {
        console.log("Gire a la Izquierda");
    } else if (destino === "Argentina") {
        console.log("Gire a la Derecha");
    } else {
        console.log('Nos Perdimos');
    }
}

viajar("Hola")

function puedeManejar(edad) {
    if (edad >= 18) {
        // console.log(true);
        console.log("Puede Manejar");
    } else {
        // console.log(false);
        console.log("No Puede manejar");
    }
}

puedeManejar(17)
