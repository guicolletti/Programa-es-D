function calcular_media(n1, n2) {
    media = (n1 + n2) / 2
    return media
}

const aluno = "Jacinto Pinto"
let calcular = calcular_media(9, 10)

console.log(`A media é: ${calcular}`)

if (calcular >= 6) {
    console.log(`O aluno ${aluno} está aprovado com média ${calcular}`)
} else if (calcular < 6) {
    console.log(`O aluno ${aluno} está reprovado com média ${calcular}`)
}