/*Crea una función que genere un número entero aleatorio entre 0 y 10 tras 1 segundo. Como es una operación asíncrona ese número se retorna invocando un callback recibido en esta función.
Genera 2 números aleatorios con esa función e imprime su suma.
Nota: empieza devolviendo un número fijo para que te sea más fácil encontrar posibles errores. Cuando todo parezca que funciona, devuelve números aleatorios.
*/


function generateRandomNumber(callback) {
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 11);
        callback(randomNumber);
    }, 1000);
}

const callbackNumber = (number) => {
    console.log("Random number generated " + number);
};

const generateRandomSum = () => {
    generateRandomNumber((number1) => {
        console.log("Random number generated:", number1);
        callbackNumber(number1);
        generateRandomNumber((number2) => {
            console.log("Random number generated:", number2);
            callbackNumber(number2);
            const sum = number1 + number2;
            console.log("Sum: " + sum);
        });
    });
};

generateRandomSum();
