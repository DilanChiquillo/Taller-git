const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let intentoAnterior = null;

console.log("Adivina el número entre 1 y 50");
console.log("Escribe tu número usando: jugar(numero)");

function esNumeroValido(n){
    return typeof n === "number" && n >= 1 && n<= 50;
}

function jugar(intento) {
  if (!esNumeroValido(intento)){
    console.log("Ingresa un Numero válido entre 1 y 50. ");
    return;
  }

  intentos++;

  if (intento === numeroSecreto) {
    console.log(`¡Correcto! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s).`);
    return;
  }

  let mensajepista = ""; // cambio nombre de variable 
  if (intentoAnterior === null) {
    const distancia = Math.abs(numeroSecreto - intento);
    mensajepista = distancia <= 5 ? "¡Caliente!" : " Frío.";
  } else {
    const distanciaActual = Math.abs(numeroSecreto - intento);
    const distanciaAnterior = Math.abs(numeroSecreto - intentoAnterior);

    if (distanciaActual < distanciaAnterior) {
      mensajepista = "¡Más caliente!";
    } else if (distanciaActual > distanciaAnterior) {
      mensajepista = "Más frío.";
    } else {
      mensajepista = "Igual que antes.";
    }
  }

  console.log(`Intento #${intentos}: ${mensajepista}`);
  intentoAnterior = intento;
}
