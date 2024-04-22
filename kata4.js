/*
Crea una función que reciba 1 número y devuelva una promesa que se resuelve tras 1 segundo si el número es par y se rechace si es impar.
Invocala y gestiona las posibles excepciones.
*/

const parImparPromesa = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero % 2 === 0) {
                resolve("El número es par");
            } else {
                reject(new Error("El número es impar"));
            }
        }, 1000);
    });
};

// Invocar la función y gestionar las excepciones
const numerodePrueba = 3;
console.log("Parte Inicial");
parImparPromesa(numerodePrueba)
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err.message);
    });
console.log("Parte restante");