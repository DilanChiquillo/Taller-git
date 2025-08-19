const LIMITE_SUPERIOR = 50;
const numeroSecreto = Math.floor(Math.random() * LIMITE_SUPERIOR) + 1;
let intentos = 0;
let intentoAnterior = null;

console.log("Adivina el número entre 1 y 50");
console.log("Escribe tu número usando: jugar(numero)");

function esNumeroValido(n){
    return typeof n === "number" && n >= 1 && n<= 50;
}

function mostrarMensajeGanador(numero, intentos) {
  console.log(`¡Correcto! Adivinaste el número ${numero} en ${intentos} intento(s).`);
}


function jugar(intento) {
  if (!esNumeroValido(intento)){
    console.log("Ingresa un Numero válido entre 1 y 50. ");
    return;
  }

  intentos++;

    if (intento === numeroSecreto) {
    mostrarMensajeGanador(numeroSecreto, intentos);
    return;
  }

  let pista = ""; // cambio nombre de variable 
  if (intentoAnterior === null) {
    const distancia = Math.abs(numeroSecreto - intento);
    pista = distancia <= 5 ? "¡Caliente!" : " Frío.";
  } else {
    const distanciaActual = Math.abs(numeroSecreto - intento);
    const distanciaAnterior = Math.abs(numeroSecreto - intentoAnterior);

    if (distanciaActual < distanciaAnterior) {
      pista = "¡Más caliente!";
    } else if (distanciaActual > distanciaAnterior) {
      pista = "Más frío.";
    } else {
      pista = "Igual que antes.";
    }
  }

  console.log(`Intento #${intentos}: ${pista}`);
  intentoAnterior = intento;
}
