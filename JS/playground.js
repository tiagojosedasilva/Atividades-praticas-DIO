const alunos = [
    {
        nome: 'Sisi',
        nota: 5,
        turma: '1B',
    },
    {
        nome: 'Popo',
        nota: 9,
        turma: '1B',
    },
    {
        nome: 'Degodego',
        nota: 7,
        turma: '2C',
    },
    {
    nome: 'Rei do Gado',
    nota: 4,
    turma: '2C',
    },
];

function alunosAprovado(arr, media){
    let aprovados = [];
    for(let i = 0; i < arr.length; i++){
        const{nota, nome}= arr[i];
        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}
console.log(alunosAprovado(alunos, 5));