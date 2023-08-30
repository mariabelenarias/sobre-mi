
PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANADOR = 1;
const PERDEDOR = 2;

const botonPiedra = document.getElementById("piedra");
const botonPapel = document.getElementById("papel");
const botonTijera = document.getElementById("tijera");
const textoResultado = document.getElementById ("texto");
const usuarioImg = document.getElementById("usuario-img");
const maquinaImg = document.getElementById("maquina-img");

botonPiedra.addEventListener("click", () => { jugar(PIEDRA); });
botonPapel.addEventListener("click", () => { jugar(PAPEL); });
botonTijera.addEventListener("click", () => { jugar(TIJERA); }); 

function jugar(opcionUsuario) {
    const opcionMaquina = calcularOpcionMaquina();
    const resultado = calcularResultado(opcionUsuario, opcionMaquina);

    usuarioImg.src = opcionUsuario + ".jpg";
    maquinaImg.src = opcionMaquina + ".jpg";

    switch (resultado) {

        case EMPATE:
          textoResultado.innerHTML = "¡Empate!";
            break;

        case GANADOR:
            textoResultado.innerHTML = "¡Ganaste!";
            break;

        case PERDEDOR:
         textoResultado.innerHTML = "¡Perdiste!";
            break;
    }
}

function calcularOpcionMaquina() {
    const numero = Math.floor(Math.random() * 3);
    switch (numero) {
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;

    }
}

function calcularResultado(opcionUsuario, opcionMaquina) {
    if (opcionUsuario === opcionMaquina) {

        return EMPATE;

    } else if (opcionUsuario === PIEDRA) {

        if (opcionMaquina === PAPEL) {return PERDEDOR; }
        if (opcionMaquina === TIJERA) {return GANADOR; }

    } else if (opcionUsuario === PAPEL) {

        if (opcionMaquina === PIEDRA) {return GANADOR;}
        if (opcionMaquina === TIJERA) {return PERDEDOR;}

    } else if (opcionUsuario === TIJERA) {

        if (opcionMaquina === PIEDRA) {return PERDEDOR;}
        if (opcionMaquina === PAPEL) {return GANADOR;}

    }
}