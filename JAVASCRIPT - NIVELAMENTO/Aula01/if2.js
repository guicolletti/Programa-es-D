const aluno = "Francisco Junior"
const faltas = 90
const nota1 = 8.9
const nota2 = 3.4
const media = (nota1 + nota2) / 2

if (media >= 6 && faltas <= 3) {
    console.log(`O aluno ${aluno} está aprovado com média ${media} e ${faltas} faltas`)
} else if (media < 6 || faltas > 3) {
    console.log(`O aluno ${aluno} está reprovado com média ${media} e ${faltas} faltas`)
}