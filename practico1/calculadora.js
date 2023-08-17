function calcular() {
    let operation = document.getElementById("operacion").value
    let primernum = parseInt(document.getElementById("primernum").value)
    let segundonum = parseInt(document.getElementById("segundonum").value)
    /* revisa los valores de cada variable */
    let resultado;

    if (operation == "suma") {
        resultado = primernum + segundonum;
    } else if (operation == "resta") {
        resultado = primernum - segundonum;
    } else if (operation == "multiplicacion") {
        resultado = primernum * segundonum;
    } else if (operation == "division") {
        resultado = primernum / segundonum;
    }
    /* según el valor de la opción seleccionada por el usuario, realiza la operación correspondiente con los dos números ingresados y lo obtenido se almacena en la variable resultado*/

    document.getElementById("resultado").innerHTML = "Resultado: " + resultado
    /* se modifica el id = resultado del documento HTML con el valor obtenido de la operación */
    document.getElementById("resultado").style = "color: red;"
}

