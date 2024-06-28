let simbolo = "X"
let jogadas = 0
function jogar(identificador) {

    const divHTML = document.getElementById(identificador)
    divHTML.textContent = simbolo

    if (simbolo == "X") {
        simbolo = "O"
    } else {
        simbolo = "X"
    }
    jogadas++
    ganhar()
}
function ganhar() {

    const div1 = document.getElementById("div1").textContent
    const div2 = document.getElementById("div2").textContent
    const div3 = document.getElementById("div3").textContent
    const div4 = document.getElementById("div4").textContent
    const div5 = document.getElementById("div5").textContent
    const div6 = document.getElementById("div6").textContent
    const div7 = document.getElementById("div7").textContent
    const div8 = document.getElementById("div8").textContent
    const div9 = document.getElementById("div9").textContent

    if ( div1 == "X" && div2 == "X" && div3 == "X" || div1 == "X" && div4 == "X" && div7 == "X" || 
         div1 == "X" && div5 == "X" && div9 == "X" || div3 == "X" && div6 == "X" && div9 == "X" ||
         div3 == "X" && div5 == "X" && div7 == "X" || div2 == "X" && div5 == "X" && div8 == "X" || 
         div4 == "X" && div5 == "X" && div6 == "X" || div7 == "X" && div8 == "X" && div9 == "X") {
        alert("Jogador 'X' ganhou!")
        window.location.reload()

    } else if (
        div1 == "X" && div2 == "X" && div3 == "X"|| div1 == "X" && div4 == "X" && div7 == "X" || 
        div1 == "O" && div5 == "O" && div9 == "O" || div3 == "O" && div6 == "O" && div9 == "O" ||
        div3 == "O" && div5 == "O" && div7 == "O" || div2 == "O" && div5 == "O" && div8 == "O" || 
        div4 == "O" && div5 == "O" && div6 == "O" || div7 == "O" && div8 == "O" && div9 == "O") {
       alert("Jogador 'O' ganhou!")
       window.location.reload()

    } else if (jogadas == 9) {
        alert("Empate!")
        window.location.reload()

    }
}