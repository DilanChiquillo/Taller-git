const numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intentos = 0;
let intentoAnterior = null;

console.log("Adivina el número entre 1 y 50");
console.log("Escribe tu número usando: jugar(numero)");

function jugar(intento) {
  if (typeof intento !== "number" || intento < 1 || intento > 50) {
    console.log("Ingresa un número válido entre 1 y 50.");
    return;
  }

  intentos++;

  if (intento === numeroSecreto) {
    console.log(`¡Correcto! Adivinaste el número ${numeroSecreto} en ${intentos} intento(s).`);
    return;
  }

  let pista = "";
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
