
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
