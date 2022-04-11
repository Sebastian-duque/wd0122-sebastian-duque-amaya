var etaUtente = 5;
var numero = 5; // dato di tipo numerico
var testo = '5'; // dato di tipo testuale (stringa)
var boolean = true;
var oggettos = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 56
};
var array = [
    1,
    2,
    3,
    4,
    'ciao'
];


var a = 2;
var b = 2;
var c = a + b;

var saluto = 'Hey';
var domanda = 'come stai?';


document.write(saluto + '' + domanda);

document.write('<ul>')
document.write('<li>' + oggetto.nome + '</li>')
document.write('<li>' + oggetto.cognome + '</li>')
document.write('<li>' + oggetto.eta + '</li>')
document.write('</ul>')


/* funzioni */

function somma(){
    document.write (2+6)
}

somma()

function ottieniSomma() {
    return 2 + 6;
}

var risultato = ottieniSomma();

alert(risultato)


var nome = 'Mario';
console.log(nome);

nome = 'Giovanni';
console.log(nome);

/* lavorare co elementi del dom*/

var div1 = document.getElementById('element')
console.log(div1)

console.log(div1.innerHTML)
div1.innerHTML = 'prova'

div1.style.backgroundColor = 'blue'
div1.classList.add('green')

var blocks = document.getElementsByClassName ('block')
console.log(blocks)

blocks[0].style.backgroundColor = 'purple'
