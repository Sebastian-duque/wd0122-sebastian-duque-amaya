function add<G>(a:G):G{
    return a;
}

let res = add<string>('cioa');

console.log(res);

let res2 = add<number>(8875);

console.log(res2);

class CustomArray<T>{
    private arr:T[] = [];//Qualunque dato che scrivo nell' array

    getItems():T[]{
        return this.arr
    }

    addItem(item:T):void{
        this.arr.push(item);
    }
    removeItem(item:T):void{
        let start = this.arr.indexOf(item);

        if(start != -1){
            this.arr.splice(start,1)
        }
    }
    removeItem2(item:T):void{
        let start = this.arr.filter((i:T) => i !== item);
    }
}
let array = new CustomArray<string>();

array.addItem('ciao')
array.addItem('ciao2')
array.addItem('ciao3')
array.removeItem('ciao2')

console.log(array.getItems());

let arrayNum = new CustomArray<number>();

arrayNum.addItem(1)
arrayNum.addItem(2)
arrayNum.addItem(3)

console.log(arrayNum.getItems())

//Generics multipli

interface KeyValue<T,U>{
    key:T;
    value:U;
}

let k:KeyValue<string,number> = {
    key:'id',
    value:0
}
let d:KeyValue<number,number> = {
    key:6,
    value:0
}

//TUPLE

let user:[number, string, any] = [1,'Giovanni',{}]

let [id,obj] = user// NOn confondere con assegnamento in destrutturazione

console.log(id)

//Matrici di tuplet

let userArr:[number, string][] = [
    [1,'Giovanni'],
    [2,'Maria'],
    [3,'Gigi']
]

console.log(userArr)

let arr:[string]=['ciao']
let arr2:string[] = ['ciao','ciao2']