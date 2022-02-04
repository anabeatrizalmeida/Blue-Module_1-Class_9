var prompt  = require(`prompt-sync`)();

const num1 = +prompt(`Digite o primeiro numero: `);
const num2 = +prompt(`Digite o segundo numero: `);
const seq = [];

if (num1 < num2){
    for (let i = num1; i <= num2; i++){
        seq.push(i);
    }
    console.log(seq); 
} else if (num1 > num2){
    for (let i = num1; i >= num2; i--){
        seq.push(i);
    }
    console.log(seq); 
}

