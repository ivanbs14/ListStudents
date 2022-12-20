
let students = [{
        nome: "Maria",
        provOne: 7,
        provTwo: 8,
    },

    {
        nome: "Carlos",
        provOne: 6,
        provTwo: 4,
    },

    {
        nome: "Jon",
        provOne: 8,
        provTwo: 9,
    },

    {
        nome: "Beladona",
        provOne: 3,
        provTwo: 7,
    },

]

const mediaStudents = function(aluno) {
    return`
        ${(aluno.provOne + aluno.provTwo) / 2}
    `
} 

/* print da mesangem */
for(let aluno of students) {
    let mediaMessage = Number(mediaStudents(aluno))
    if(mediaMessage < 6) {
        alert(`A média do(a) aluno(a) ${aluno.nome} é: ${mediaMessage}\n Não foi dessa vez, ${aluno.nome}! Tente novamente!`)

    } else (alert(`A média do(a) aluno(a) ${aluno.nome} é: ${mediaMessage}\n Parabéns, ${aluno.nome}! Você foi aprovado(a) no concurso!`))
}

