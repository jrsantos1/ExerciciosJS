// forma 01 

function comprimentar(nome){
    return console.log("Olá, " + nome);
}

comprimentar("Jhonatan");
console.log(".");
console.log(".");
console.log(".");
console.log(".");

// forma 2, utilizando arrow function

let comprimetar = nome => {console.log("Olá," + nome);}

comprimentar("Jhonatan");

console.log(".");
console.log(".");
console.log(".");
console.log(".");

// forma 3, utilizando anonymy function 

let funcionalidades = {
    nome: "jhonatan",
    sobrenome: "Joaquin",
    nomeCompleto : nome => (console.log("Olá, " + nome))
}

funcionalidades.nomeCompleto("Jhonatan");


console.log(funcionalidades.nome);