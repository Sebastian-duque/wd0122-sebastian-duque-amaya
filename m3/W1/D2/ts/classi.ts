class Car{

    public modello:string;
    public marca:string;
    public colore:string;

    protected prezzo:number;
    protected scontoRivenditore:number = 30;//Le propietà protected/private non sono accessibili dall'esterno.
    //perciò non si può fare console.log(bmw.scontoRivenditore)

    static stato = 'Germany'
    constructor(mod:string, mar:string, col:string, p:number){
        this.modello = mod;
        this.marca = mar;
        this.colore = col
        this.prezzo = p
    }

    public dettagliAuto():string{
        return this.modello + " " + this.marca + " " + this.colore
    }

    public set cambiaScontoRivenditore(n:number){
        this.scontoRivenditore = n;

    }

    public get prezzoFinale():string{//get metodo solo per la lettura dei dati.
        return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
    }

    public static nazione():void{
        console.log(this.stato); 
    }


}

let bmw = new Car('i8', 'bmw','Nero', 129000);

console.log(bmw.modello)
console.log(bmw.prezzoFinale)

bmw.cambiaScontoRivenditore = 20

console.log(bmw.prezzoFinale)
console.log(bmw)
