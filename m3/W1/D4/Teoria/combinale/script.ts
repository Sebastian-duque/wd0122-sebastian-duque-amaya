type Combinable = number | string
type ConversionDescriptor = boolean | string

function combine(input1:Combinable, input2:Combinable):Combinable{


    if(typeof input1 === 'number' && typeof input2 === 'number'){
        var result:  Combinable = Number(input1) + Number(input2);
    }else{
        var result:  Combinable = input1.toString() + String(input2)
    }
    return result;
}

let resNum = combine(1,1)
console.log(resNum)

let resStr = combine('1', 1)
console.log(resStr)

//Tipi di intersezione che

/*
Promemoria per l'utilizzo di interfacce come tipo di dato
interface ITest{
    nome: string;
    cognome: string
}

let person:ITest = {
    nome: 'Mario',
    cognome: 'Rossi'
}
*/

type Admin = {
    name: string
    priviliges: string[]
}

type Employee = {
    names: number;
    startDate: Date;
}

type ElevateEmployee = Admin & Employee;// In questa maniera li sto intersecando

const e1:ElevateEmployee = {
    name:'Max',
    names: 12,
    priviliges: ['create-server'],
    startDate: new Date()
}