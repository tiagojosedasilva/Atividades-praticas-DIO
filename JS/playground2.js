function calculeIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Jantovane",
    idade: 22,
}
const pessoa2 = {
    nome: 'Janecleide',
    idade: 39,
}
const pessoa3 = {
    nome: "Cleonáscio",
    idade: 54,
}

//console.log(calculeIdade.call(pessoa3, 30));
console.log(calculeIdade.apply(pessoa2, [70]));