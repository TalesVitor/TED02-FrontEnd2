let numAulas = parseInt(prompt("Digite o número total de aulas no semestre: "))
let faltas = parseInt(prompt("Digite o número total de faltas: "))
let p1 = parseFloat(prompt("Digite sua primeira nota: "))
let p2 = parseFloat(prompt("Digite sua segunda nota: "))

let frequencia = ((numAulas-faltas)/numAulas)*100;
let media = (p1+p2)/2;

let situacao = "";
let recuperacao = null;

if (frequencia<=75) {
    situacao = "Reprovado por falta";
} else {

    if (media>=7) {
        situacao = "Aprovado";
    } else if (media>=5) {
        recuperacao = parseFloat(prompt("Digite a nota da sua recuperação: "));
        let mediafinal = (media+recuperacao)/2;

        if (mediafinal>=5) {
            situacao = "Aprovado após recuperação";
        } else {
            situacao = "Reprovado após recuperação";
        }
    } else {
        situacao = "Reprovado por nota";
    }
}

console.log("Número de aulas no semestre: " + numAulas);
console.log("Número de faltas do aluno: " + faltas);
console.log("Percentual de presença: " + frequencia.toFixed(2) + "%");
console.log("Primeira nota: " + p1);
console.log("Segunda nota: " + p2);

if (recuperacao !== null) {
    console.log("Nota da recuperação: " + recuperacao);
}

console.log("Situação final do aluno: " + situacao);