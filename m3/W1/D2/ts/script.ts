//Enumeratori
enum Months{
    Gennaio = 1,
    Febbario = 2,
    MArzo,
    Aprile
}

console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile)
console.log(Months)

enum Color{
    Bianco = '#fff',
    Nero = '#000'
}

let colore : Color = Color.Bianco

//Funzioni e Ogetti

const states:{italy:string, england:string, id:any} = { 
    italy: 'Rome',
    england: 'London',
    id:function(){
        return this.italy + '' + this.england;
    }
}

console.log(states.italy, states.england, states.id())

function somma(a:number, b:number, c?:number):number {
    return a + b; 
}