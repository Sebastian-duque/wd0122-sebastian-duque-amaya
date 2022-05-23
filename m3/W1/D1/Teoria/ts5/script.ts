// tipi di dato

let str:string = 'testo';// dato testuale
let num:number = 1000;// dato numerico
let bool:boolean = false;// dato boolenao
let obj:object = {};// Oggetto
let arr:[] = [];
let strArray:string[] = ['Mario', 'Lucia', 'Maria'];
let numArray:number[] = [0,1,2,3,];
let objArray:object[] = [{},{},{},{},{},{},{},{},];
let anyArray:any[] = ['Mario',0,{}];
let any:any = 'ciao';// qualunque tipo di dato 
let unk:unknown = 12;// dato sconosciuto 

let union:(string|object) = 'test';
union = {};



function saluta(testo:string):void{
    console.log(testo);
}

function ottieniSaluto(testo:string):string{
    return testo;
}