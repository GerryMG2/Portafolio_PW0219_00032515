
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