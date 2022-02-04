var prompt  = require(`prompt-sync`)();

const eleitores = +prompt(`Digite o numero total de eleitores: `);

const candidatos = [`candidato1`, `candidato2`, `candidato3`];

cand1 = 0;
cand2 = 0;
cand3 = 0;

for (let i = 0; i < eleitores; i++){
    console.log(`Escolha um dos candidatos: \n1- ${candidatos[0]} \n2- ${candidatos[1]} \n3- ${candidatos[2]} \n`);
    console.log();
    const usuario = (+prompt(`Qual candidato você escolhe para votar? `));

    if (usuario == 1){ 
        votoEleitor = (`${candidatos[0]}`);
        cand1 = cand1 + 1; 
    } else if (usuario == 2){
        votoEleitor = (`${candidatos[1]}`);
        cand2 = cand2 + 1;
    } else if (usuario == 3){ 
        votoEleitor = (`${candidatos[2]}`);
        cand3 = cand3 + 1;
    } else if (usuario <1 || usuario >3){
        votoEleitor = (`Opção inválida`);
        break;
    }

}

console.log (cand1);
console.log (cand2);
console.log (cand3);

