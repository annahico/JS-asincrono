//Crea una función que reciba 2 números y un callback e invoque ese
//callback tras 1 segundo con la suma de los números como argumento.

function sumaCallback(num1, num2, callback) {
    setTimeout(() => {
        const suma = num1 + num2;
        callback(suma);
    }, 3000);
};

const callback = (result) => {
    console.log(result);
};

sumaCallback(5, 3, callback);
