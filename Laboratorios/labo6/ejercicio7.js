
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