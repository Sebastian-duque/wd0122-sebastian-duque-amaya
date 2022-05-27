const APPURL:string = "Abbigliamento.json"

let objs:{}[]=[]

class Abbigliamento{

    

    private id:number
    private codprod:number
    public collezione:string
    public capo:string
    public modello:number
    public quantita:number
    public colore:string
    public prezzoivaesclusa:number
    public prezzoivainclusa:number
    public disponibile:string
    public saldo:number 
    
    constructor(id:number, codprod:number,capo:string, collezione:string, modello:number, quantita:number, colore:string, prezzoivaesclusa:number,prezzoivainclusa:number, disponibile:string, saldo:number){
        this.id= id
        this.codprod=codprod
        this.collezione = collezione
        this.capo= capo
        this.modello=modello
        this.quantita=quantita
        this.colore=colore
        this.prezzoivaesclusa=prezzoivaesclusa
        this.prezzoivainclusa=prezzoivainclusa
        this.disponibile=disponibile
        this.saldo= saldo
    }
}
console.log(Abbigliamento)

fetch(APPURL)
.then(res => res.json())
.then(res => {
    console.log(res)
    for(let a of res) {
        console.log(a)
    }
})


