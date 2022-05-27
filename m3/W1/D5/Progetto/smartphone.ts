interface  ISmartphone{
    carica:number;
    numeroChiamate:number;
   
    costoChiamata:number;
    azzeraChiamate():void;
    ricarica():void;
    chiamata():void;
}

class FirstUser implements ISmartphone {
    carica: number
    numeroChiamate: number;
    
    costoChiamata: number
    
    constructor(carica:number, numeroChiamate:number){
        this.carica = 20;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = 0.20;

        let x = this.carica
        console.log(x);
    }
    

    
    
    
    public ricarica(): void {}
    chiamata(): void {
        
        
    }
    azzeraChiamate(): void {}


    
}
class SecondUser implements ISmartphone {
    carica: number;
    numeroChiamate: number;
    minutiDurata: number;
    costoChiamata: number;
    azzeraChiamate(): void {
        throw new Error("Method not implemented.");
    }
    ricarica(): void {
        throw new Error("Method not implemented.");
    }
    chiamata(): void {
        throw new Error("Method not implemented.");
    }
    

}
class ThirdUser implements ISmartphone {
    carica: number;
    numeroChiamate: number;
    minutiDurata: number;
    costoChiamata: number;
    azzeraChiamate(): void {
        throw new Error("Method not implemented.");
    }
    ricarica(): void {
        throw new Error("Method not implemented.");
    }
    chiamata(): void {
        throw new Error("Method not implemented.");
    }
    

}
