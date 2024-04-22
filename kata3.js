/*Crea una función que devuelva una promesa. Esa promesa debe resolverse (pasar a estado fulfilled) con “hola mundo” tras 1 segundo.
Invocar esa función y consumir esa promesa que devuelve para imprimir ese “hola mundo” por pantalla
*/

const saludarPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Hola Mundo";
            resolve(data);
        }, 1000);
    });
};


// Consumir la promesa
saludarPromesa().then((data) => {
        console.log(data);
    });
