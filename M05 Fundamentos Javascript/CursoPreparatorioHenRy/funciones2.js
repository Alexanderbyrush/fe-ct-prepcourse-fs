function cuidadoConElConsoleLog(nombre) {
    return nombre;
}

function otraFuncion() {
    return (
        "el nombre retornado por la funcion 'cuidadoConElConsoleLog' es: " + cuidadoConElConsoleLog('Alexanderrr')
    );
}

function cuidadoConElReturn(nombre) {
    return nombre // todo lo que se encuentra por debajo del return no se va ejecutar ReferenceError Function Is not Defined
    console.log(nombre);
}

// No debemos usar console.log() mas que para ayudarnos