const display = document.getElementById("display")

function mostrar_display(numero) {
    display.value += numero
}
function sucumbir_numeros() {
    display.value = ""
}
function calcular() {
    const resultado = eval(display.value)
    display.value = resultado
}
function mais_menos() {
    const resultado = eval(display.value)
    display.value = resultado * -1
}
function ponto() {
    display.value += "."
}