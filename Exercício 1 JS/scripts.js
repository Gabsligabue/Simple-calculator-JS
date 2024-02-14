alert("Olá! Vamos calcular? :D")

let first = prompt("Digite o primeiro número:")
let second = prompt("Digite o segundo número:")

first = Number(first)
second = Number(second)


let sum = first + second

let sub = first - second

let multi = first * second

let div = (first / second).toFixed(2)

let restDiv = first % second



alert('Soma: ' + sum)

//para saber se é ímpar ou par
if (sum % 2 == 0){
    alert('A soma dos dois números é par')
} else{
    alert('A soma dos dois números é ímpar')
}


alert('Subtração: ' + sub)

alert('Multiplicação: ' + multi)

alert('Divisão: ' + div)

alert('Resto da divisão: ' + restDiv)


// para informar se são iguais ou diferentes
if (first != second){
    alert('Os números inseridos são diferentes')
} else{
    alert('Os números inseridos são iguais')
}