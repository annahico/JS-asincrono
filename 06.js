const fetchUserData = (callback)=> {
    setTimeout(()=>{
        const user = { id:2, name: "Anna", email: "anna@gmail.com"};
        callback(user);
    }, 2000);
};


const callbackFunction = (user) =>{
    console.log("User data received: " + user);
};

//USO
console.log("Inicio..."); //bloque de codigo
fetchUserData(callbackFunction);
console.log("Otra Parte..."); //otro bloque de codigo
