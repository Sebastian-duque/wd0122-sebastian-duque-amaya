class PIzza {
    constructor(g,tipo = 'Napoletana',p = 5){
        //all'interno del constructor inizializzo/valorizzo le proprietà
        //ma posso anche lanciare funzioni/avviare processi 
        this.gusto = g
        this.tipo = t
        this.prezzo = p
        this.sconto = 0
        this.dettagli()
    
   }
   dettagli(){
    console.log('La pizza'+this.gusto+'di tipo '+ this.tipo +'costa'+this.prezzo+'euro')
}
}

let margherita = new Pizza('Margherita');

/**
 * Sistema furbo per sistema che ahnno tanti argomenti 
 */

class prova{
    constructor(obj){
        this.gusto = obj.gusto || 'Margherita'
        this.tipo = obj.tipo  || 'Napoletana'
        this.prezzo = obj.prezzo || 5
        this.sconto = 0 
    }
}
let info = {
     tipo: 'Napoletana',
     prezzo: 6,
}

let prova = new Prova (info)
console.log(prova)

/**
 * eriditarietà
 */

class Persona{
    constructor(nome, cognome, anni){
        this.nome = nome
        this.cognome = cognome
        this.anni = anni
    }
    presentazione(){
        console.log(`Ciao, mi chiamo ${this.nome}${this.cognome} ed ho ${this.anni}anni`)
        //console.log(Ciao, mi chiamo'+this.nome+'this.cognome+' ed ho '+this.anni+'anni')

    }
}

let persona = new Persona('Mario', 'Rossi', 30)
persona.presentazione()

class Studente extends Persona{
    constructor(nome, cognome, anni){
        super(nome, cognome, anni)//attiva il costruttore della classe genitore 
        //valorizzando di fatto le proprietà ed eventualmente lanciando le stesse funzioni
    }
    presentazione(){ 
        return super.presentazione() + 'e sto studiando le seguenti materie:' + this.materie
    }
}

let studente = new Studente('Maria', 'Rosa', 20, ['HTML', 'CSS', 'JS'])
console.log(studente.presentazione)
console.log(studente)