var prompt  = require(`prompt-sync`)();

const numeros = +prompt(`Digite quantos numeros deseja: `);

let lista = [];

for (let i = 0; i < numeros; i++){
    lista[i] = +prompt(` Digite um número inteiro: `);
}
console.log(lista);

lista.sort(function(a,b){
    return a-b;
});

console.log(lista);

const valormin = lista[0];
const valormax = lista.pop();
const soma = valormin + valormax

console.log(valormin);
console.log(valormax);
console.log(soma);


