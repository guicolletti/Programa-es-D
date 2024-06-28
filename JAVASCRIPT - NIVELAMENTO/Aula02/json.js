const aluno = {
    "nome": "Francisco Junior",
    "idade": 17,
    "escola": "Senai",
    "cidade": "Piracicaba",
    "maior_idade": 19
}

console.log(`O aluno ${aluno.nome} mora na cidade de ${aluno.cidade}`)
console.log(`O aluno tem ${aluno.idade} anos, estudante do ${aluno.escola}`)
if (aluno.maior_idade >= 18) {
    console.log(`O aluno é maior de idade, pois tem ${aluno.maior_idade} anos`)
} else if (aluno.maior_idade < 18) {
    console.log(`O aluno é menor de idade, pois tem ${aluno.maior_idade} anos`)
}