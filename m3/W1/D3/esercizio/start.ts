abstract class Lavoratore{
    codredd:number;
    redditoAnnualeLordo:number;
    tasseInps:number;
    tasseIperf:number;

    

    constructor(codredd:number, redditoAnnualeLordo:number, tasseInps:number, tasseIperf:number){
        this.codredd = codredd;
       /*this.redditoAnnualeLordo = redditoAnnualeLordo;
        this.tasseInps = tasseInps;
        this.tasseIperf = tasseIperf;*/
    }
    getUtileTasse(redditoAnnualeLordo:number, codredd:number){
      return this.redditoAnnualeLordo
    }

    abstract getRedditoNetto():number
    abstract getTasseInp():number
    abstract getTasseIperf():number
    
}

class Artigiano extends Lavoratore {
    constructor(ra:number, rc:number){
        super(ra, rc);
        this.tasseInps = 5
        this.tasseIperf = 10
    }
    getRedditoNetto():number{
        return this.redditoAnnualeLordo - (this.getTasseIperf())
    }
}
class LiberoProfessionista extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
    }
}
class Commerciante extends Lavoratore {

    getRedditoAnnuoNetto():number {
        
    }
}