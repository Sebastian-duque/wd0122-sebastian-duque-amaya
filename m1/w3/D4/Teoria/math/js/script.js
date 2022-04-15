let x = 1
console.log(x)

x++// incremento il valore della variabile numerica
x = x+1// sovrascrivo il  valore di x con il valore + 1
x += 1 // aggiungo il valore della variabile

x--//decremento di 1
x = x - 1 
x -= 1
console.log(x)


/*
*arrontondatore
*/
let n1 = 5.3
let n2 = 5.5
let n3 = 5.8
console.log(Math.round(n1))// arrotonda per eccesso
console.log(Math.round(n2))// arrotonda per eccesso
console.log(Math.round(n3))// arrotonda per diffetto

console.log(Math.ceil(n1))// arrotonda per eccesso
console.log(Math.floor(n2))// arrotonda per diffetto




let target = document.querySelector('#grazie')

let ringraziamenti = ['Grazie','Grazie mille','Tante grazie','lol thanks']
let punteggiamenti = ['','!','!!']
let smile = ['',':D',':)']

function generateRandom(arr){
    return Math.floor(Math.random()* arr.length)
}
let rand1 = generateRandom(ringraziamenti)
let rand2 = generateRandom(punteggiamenti)
let rand3 = generateRandom(smile)


let frase = ringraziamenti[rand1] + ' ' + punteggiamenti[rand2] + ' ' + smile[rand3]
 console.log(frase)

