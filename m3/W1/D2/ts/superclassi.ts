class Veicoli{

    public ruote:number;

    public marca:string;
    public modello:string;

    protected prezzo:number;

    public tipo:string;

    constructor(ruote:number, marca:string, modello:string, prezzo:number, tipo:string) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }

    dettaglliVeicolo(){
        return `Modello: ${this.modello}, Marca: ${this.marca}, Ruote: ${this.ruote}`;

    }
}

let apecar = new Veicoli(3,'Piaggio','',1500,'apecar');

class Cars extends Veicoli {

    public autoradio: boolean = true;

    private costoPieno:number = 80;

     
    constructor(marca: string, modello: string, prezzo:number){

        super(4,marca,modello,prezzo,'Automobili')
    }

}

let auto = new Cars('bmw','i8',150000);

console.log(auto)

class ElecticCars extends Cars{

    cambiaCostoPieno(){
       // this.costoPieno = 30;//La proprietà costo pieno non è accessibile dalla sottoclasse.
    }
}
let autoElettrica = new ElecticCars('bmw','i8 elettrica',150000)
console.log(autoElettrica)