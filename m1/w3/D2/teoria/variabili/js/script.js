/* stringhe ed scape */

var saluto = "ciao"
var domanda = "com'è oggi il tempo"
var domanda2 = 'com\'è oggi il tempo'
var html = "<div class='blocco'></div>"
var html = "<div class=\"blocco<\"></div>" /* non è detto che funzioni*/

var nome = 'Giovanni'; //valore ipoteticamente definifito dall'utente//
var frase = "ciao" + nome + "come stai"
var frase2 = `ciao ${nome} come stai?`//backtick

console.log(frase2)// con questo tutto quello che succede//
console.log(frase2.length) //con questo vedo quello che sucede nella riga precedente//
console.log(frase2[0])// con vedo quello che succede in una riga specifica//
var ultimoIndice = frase2.length -1
console.log( frase2 [ ultimoIndice])
/*console.log( frase2 [23])
console.log( frase2 [ frase2.length -1]);*/

console.log('% log colorato','color:font-size:30px');//come applicare i css ai console.log()//

/* let e const*/

const PASSWORD = 'HXHGXHGXHKCVKCI'
console.log(PASSWORD)
// PASSWORD = 198398183D' => ERRORE//
const OBJ = {
    nome: 'Mario'
} 

var x = 1;

{
    console.log(x)
}

let y = 2
{
    console.log(y)
}


{
    var x2 = 1;
    console.log(x)
}
console.log(x2)

{
    let y2 = 2
    console.log(y)
}
//console.log(y2) errore y2 non è definita 

function scriviSaluto(){
    var s = 'ciao'
    document.write(frase2)
    return (s)
}
scriviSaluto()

/* conversione variabile */

let num = 4;
let testo = '4';
let prezzo = '4€'
console.log(num + testo)// num viene traformato in stringa
console.log (num * testo)// testo vienen trasformato in numero e quindi moltiplicato
console.log (num * prezzo)

let bool = false;
let valore = "<br>il valore della variabile booleana è" + bool 
document.write (valore)

console.log(num * bool)// se convertito tra loro in numero, un valoro booleano si trasfroma in 0 se è falsa, in 1 se è true

let booleano = Number (true)
let errore = Number ('4a')
let stringa = String = (4)
console.log(booleano, errore, stringa)

let arr = ['a','b','c','d',60];
document.write(arr);//i valori vengono concatenati in una stringa e separati tra loro con una virgola
