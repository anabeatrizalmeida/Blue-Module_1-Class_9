var prompt  = require(`prompt-sync`)();

let numero = +prompt(`Digite um número inteiro: `);

for (let x = 1; x <= numero ; x++){ 
    if (x%2 != 0){
        console.log(x);
    } else {
        continue;
    }  
}
