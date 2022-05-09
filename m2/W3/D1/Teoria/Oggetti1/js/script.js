//1 creo un oggetto e lo valorizzo a mano
let oggetto = {
    nome: 'Mario'
}
//i deu sistemi sotto servono a creare una serie di oggetti
// sono come dei libretti d'istruzioni che servono a creare oggetti tutti identici
//come se fossero stampini

//2 costruttore dell'oggetto
function CostruttoreOggetto(){
    this.nome = 'Mario'
}

let oggetto2 = new CostruttoreOggetto()

//3 classe
class ClasseOggetto{
    constructor(){
        this.nome = 'Mario'
    }
}

let oggetto3 = new ClasseOggetto()

console.log(oggetto)
console.log(oggetto2)
console.log(oggetto3)
//Constructor metodo chev viene auto invocato e permette l'inserimento di valori
class Automobile{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
    }
}

let mercedes = new Automobile('Mercedes','Nero')
let apecar = new Automobile('Piaggio','Nero')
apecar.ruote = 3;

console.log(apecar)
console.log(mercedes)

let nissan = new Automobile('','')
nissan.marca= 'Nissan'
nissan.colore = 'Verde'

console.log(nissan)
/**
 * Parentesi Quadre
 */
let pizza = {
    gusto: 'Margherita'
}
pizza['gusto']//bene ma non benissimo
pizza.gusto//sintassi corretta

let pizza2 = {
    0: 'Margherita',//potreste avere un oggetto contenente proprieta che non iniziano con numero
    'gusto-pizza': 'Napoletana',//potreste avere un oggetto contenente proprietà contengono caratteri no permessi
     
}

//pizza.0 non funzionarebbe
pizza[0]
//pizza2.gusto-pizza non funzionarebbeper via del trattino alto
pizza2["gusto-pizza"]