const operacionAsincrona = (cb) => {  //CallBack = función que se envía como argumento a otra función y la ejecuta cuando acaba el trabajo asíncrono
    //operaciones asincronas
    //operaciones asincronas
    //operaciones asincronas
    cb();
};

const callback = () => {
    console.log("Hola Mundo");
};

//uso
operacionAsincrona(callback);