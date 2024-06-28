const cidade = {
    "nome": "Piracicaba",
    "estado": "São Paulo",
    "bairros": [
        "Centro", "Vila Fátima", "Industrial",
        "Santa Terezinha e", "Cecap"
    ],
    "pais": "Brasil"
}

console.log(`A cidade de ${cidade.nome} fica no estado de ${cidade.estado}`)

for (let i = 0; i < cidade.bairros.length; i++) {
    const bairres = cidade.bairros[i]

    if (bairres != "Centro") {
    console.log(`Tem ${cidade.bairros.length} bairros que são: ${bairres}`)
    }

}

console.log(`Isso tudo fica no ${cidade.pais} :)`)