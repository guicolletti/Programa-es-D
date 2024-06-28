function Naoentendi(nome, salario, percentual) {
    let nome_usuario = nome
    let salario_usuario = salario
    let percentual_usuario = percentual
    let calcular = salario * (percentual / 100)
    let novo_salario = calcular - salario_usuario

    console.log("Informações do Usuário:")
    console.log(`Nome: ${nome_usuario}`)
    console.log(`Salário: R$${salario_usuario}`)
    console.log(`Percentual de Aumento: ${percentual_usuario}%`)
    console.log(`Valor do Aumento: R$${novo_salario}`)
    console.log(`Novo Salário: R$${calcular}`)
} 

let informacoes = {
    "nome": "Jalin Rabei",
    "salario": 2.50,
    "percentual": 2000
}

Naoentendi(informacoes.nome, informacoes.salario, informacoes.percentual)