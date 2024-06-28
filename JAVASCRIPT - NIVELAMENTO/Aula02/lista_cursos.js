
const cursos = [
    {
        "id": 1,
        "nome": "Lógica de Programação",
        "nivel": "Básico"
    },
    {
        "id": 2,
        "nome": "Sistemas Operacionais",
        "nivel": "Básico"
    },
    {
        "id": 3,
        "nome": "Programação Web Backend",
        "nivel": "Intermediário"
    },
    {
        "id": 4,
        "nome": "Programação Web Frontend",
        "nivel": "Intermediário"
    },
    {
        "id": 5,
        "nome": "Programação Mobile",
        "nivel": "Avançado"
    },
    {
        "id": 6,
        "nome": "Programação em Redes e IoT",
        "nivel": "Avançado"
    },
    {
        "id": 7,
        "nome": "Programação em Arduino",
        "nivel": "Extremo"
    },
    {
        "id": 8,
        "nome": "Programação em Ruby",
        "nivel": "Extremo"
    }
    
]

for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];

    if (curso.nivel == "Básico") {
        console.log(`Os cursos de nível Básico são: ${curso.nome}`)
    }
}

    
for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];

    if (curso.nivel == "Intermediário") {
        console.log(`Os cursos de nível intermediários são: ${curso.nome}`)
    }

}

for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];

    if (curso.nivel == "Avação") {
        console.log(`Os cursos de nível Avançado são: ${curso.nome}`)
    }

}

for (let i = 0; i < cursos.length; i++) {
    const curso = cursos[i];

    if (curso.nivel == "Extremo") {
        console.log(`Os cursos de nível Extremo são: ${curso.nome}`)
    }

}