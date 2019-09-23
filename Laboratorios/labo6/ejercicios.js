// ejercico 1
function listDataType(lista) {
    let resturnLista = new Array();
    lista.forEach(element => {
        resturnLista.push(typeof(element))
    });
    // console.log(resturnLista)
    let LastList = new Array();
    while (resturnLista.length != 0) {
        // console.log(resturnLista);
        let element = resturnLista[0];
        let cantidad = resturnLista.filter((x) => x == resturnLista[0]).length;
        let objectInsert = { "tipo": element, "cantidad": cantidad };
        LastList.push(objectInsert);
        while (resturnLista.indexOf(element) != -1) {
            let ind = resturnLista.indexOf(element);
            resturnLista.splice(ind, 1);
            // console.log(resturnLista);
        }
    }
    return LastList;
}

// ejercico2

function sumaLista(lista) {
    let suma = 0;
    lista.forEach(element => {
        suma = suma + element;
    });

    let promedio = suma / lista.length;

    let respuesta = `La suma es ${suma}, y el promedio es ${promedio}`
    console.log(respuesta);
    return respuesta;
}

// ejercicio 3
function ocurrencias(lista, numero) {
    return lista.filter((x) => x == numero).length;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// ejercicio4
function numeroRandom() {
    let x = parseInt(prompt("Ingresa un numero:"));
    let lista = [];

    for (let i = 0; i < 20; i++) {
        lista.push(getRandomInt(0, 100));
    }
    console.log(lista);

    if (lista.indexOf(x) != -1) {
        console.log("ganaste");
    } else {
        console.log("perdiste");
    }

}

// ejercicio5

function palindromo(palabra) {
    let respuesta = palabra.split("").reverse().join("") == palabra;
    console.log(palabra.split("").reverse().join(""))
    if (respuesta) {
        console.log("es palindromo");
    } else {
        console.log("no es palindromo")
    }

    return respuesta;
}

// ejercicio 6
function ascendente(lista) {
    return lista.sort((a, b) => { return a - b })
}

// ejercicio 7

function fibo(n) {
    lista = [0, 1];

    if (n == 1) {
        console.log(lista[0]);
        return lista[0];
    } else {
        if (n == 2) {
            console.log(lista);
            return lista;
        } else {
            while (lista.length != n) {
                lista.push(lista[lista.length - 1] + lista[lista.length - 2])
            }
            console.log(lista);
            return lista;
        }
    }
}

// ejercicio 8

function numerToBinary(numero) {
    return numero.toString(2);
}

// ejercicio 9
function areaCirculo(radio) {
    if (radio <= 0) {
        return -1;
    } else {
        return Math.PI * radio * radio;
    }
}


// ejercicio 10 

function valorAbsoluto(numero) {
    if (numero < 0) {
        return -numero;
    } else {
        return numero;
    }
}