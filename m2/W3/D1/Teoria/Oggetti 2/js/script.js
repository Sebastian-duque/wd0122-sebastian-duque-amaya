
class Automobile{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
    }
    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}

let mercedes = new Automobile('Mercedes','Nero')
console.log(mercedes)
mercedes.sconto(30)
console.table(mercedes)

function Automobile2(_marca, _colore){
    
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
        this.sconto = function(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}

let audi = new Automobile('audi','Blu')
console.log(audi)
mercedes.sconto(30)
console.table(audi)

class Automobile3{
    constructor(_marca, _colore){
        this.marca = _marca
        this.colore = _colore
        this.ruote = 4
        this.prezzo = 10000
    }
    sconto(percentuale){
        this.prezzo = (this.prezzo/100) * (100 - percentuale)
    }
}

let mercedes = new Automobile('Mercedes','Nero')
console.log(mercedes)
mercedes.sconto(30)
console.table(mercedes)

let ferrari = new Automobile('Ferrari', 'Rossa')
let lamborghini = new Automobile('Lamborghini','Gialla')
Automobile.prototype.brandProtetto = truetype

console.table(['Ferrari','Lamborghini'])
console.table(ferrari.brandProtetto)