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
