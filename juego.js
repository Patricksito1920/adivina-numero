const numeroSecreto = Math.floor(Math.random() * 100 + 1) // Rango del 100 al 1
console.log("Número secreto:", numeroSecreto);

const jugador = parseInt(prompt("Adivina el número secreto entre 1 y 100:"));



if (jugador === numeroSecreto) {
    console.log("Felicidades lo has logrado!");
    alert("Felicidades re capo!");
} else if (jugador < numeroSecreto) {
    console.log("El numero es bajito");
    alert("El numero es bajito");
} else if (jugador > numeroSecreto) {
    console.log("El numero es grandote");
    alert("El numero es grandote");
}
