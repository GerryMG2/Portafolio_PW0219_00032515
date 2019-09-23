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