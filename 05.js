//EJEMPLO ASÍNCRONO

let foo = 1;
console.log(foo);
const callback = () => {
foo++;
}
setTimeout(callback, 0);
console.log(foo);