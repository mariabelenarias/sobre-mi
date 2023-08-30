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

if 
    /*validaciones
    if ((primernum = NaN) || (segundonum = NaN) || (resultado = NaN)) {
        alert("Error: El valor ingresado no es válido");
        /*document.getElementById("resultado").innerHTML = "Resultado: "*/
        return;/*si no se ingresan números en los campos, envía un alert*/
    } 
    
    if ((operation = "division") && (segundonum = 0)) {
        alert("Error: La operación no es válida");
        document.getElementById("resultado").innerHTML = "Resultado: "
        return;/*Si el usuario intenta dividir por cero, muestra un mensaje de error indicando que la
operación no es válida
    } */
