//EJEMPLO SÍNCRONO CON UNA FUNCIÓN

let foo = 1;
console.log(foo);
const callback = () => {
foo++;
}
callback();
console.log(foo);