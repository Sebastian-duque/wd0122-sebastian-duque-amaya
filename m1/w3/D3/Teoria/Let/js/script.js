let num = 5;
let str = 'test';
let bool = true;
let arr = []
let obj = []

console.log (
    typeof num,
    typeof str,
    typeof bool,
    typeof array,
    typeof object
)
if(typeof num == 'number'){
    console.log('è un numero')

}

let num1 = 1
let num2 = 1

console.log(num1 == num2)//vero anche se i tipi di dati sono diversi ma i valori sono uguali
console.log(num1 === num2)//falso perchè devonno essere identici anche i tipi di dato
console.log(num1 != num2)//falso perchè  il valore è diverso 
console.log(num1 == num2)//falso perchè devono essere diversi anche i tipi di dato e i valori

let eta = prompt('Scrivi la tua età') || 0;

let comferma = prompt('scrivi la tua età') >= 18? 'Sei maggiorenne': 'Sei minorenne'
document.write(comferma)
