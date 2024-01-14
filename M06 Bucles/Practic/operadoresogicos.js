function mayorYmenor(num) {
    if (num > 5 && num < 10)console.log(true);
    else console.log(false);
};

mayorYmenor(2)
mayorYmenor(7)

function mayorYmenorYpar(num) {
    if (num > 5 && num < 10 && num % 2 === 0)console.log(true);
    else console.log(false);
};

mayorYmenorYpar(7)
mayorYmenorYpar(8)

function operadorOr(str) {
    if (str === 'Henry' || str.length<2)console.log(true);
    else console.log(false);    
}

operadorOr('he')

function negacion(permiso) {
    if (!permiso) console.log('Tiene permiso');

}

negacion(true); // solo se imprimira tiene permiso si el valor permiso es true sin el (!)
negacion(false); // solo se imprimira tiene permiso si el valor permiso es false con el (!)


function negacion(permiso) {
    if (permiso !== true) console.log('Tiene permiso');

}

negacion(false); 

function condicionCompleja(num) {
    if (num > 9 && num % 2 === 0 || num === 3)console.log(true);
    else console.log(false); 
}

condicionCompleja(10);
condicionCompleja(6);
condicionCompleja(3);
condicionCompleja(5);
condicionCompleja(13);

