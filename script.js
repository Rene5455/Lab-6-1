let nombre = "Rene";
const edad = 22;
let esEstudiante = true;

console.log(nombre, edad, esEstudiante);

let frutas = ["Manzana", "Banana", "Uva"];
frutas.push("Naranja");
console.log(frutas);

let usuario = {
    nombre: "Rene",
    rol: "Estudiante"
};
console.log(usuario.nombre);

function verificarEdad(num) {
    if (num >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
}
console.log(verificarEdad(edad));

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

let c = 0;
while (c < 3) {
    console.log(c);
    c++;
}

let d = 0;
do {
    console.log(d);
    d++;
} while (d < 1);

let mensajeGlobal = "Global";

function mostrarMensaje() {
    let mensajeLocal = "Local";
    console.log(mensajeGlobal);
    console.log(mensajeLocal);
}
mostrarMensaje();

function crearContador() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
}

const contador = crearContador();
console.log(contador());
console.log(contador());