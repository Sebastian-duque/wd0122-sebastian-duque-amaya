let arr = [1,2,3,4];
console.log(arr, arr.length);
console.log([5,6,7,8],[5,6,7,8].length)//posso creare array al volo senza creare una variabile

let pizze = [
    'Margherita',
    'Diavola',
    '4 Stagioni'
]
let pizzaDiaviola = pizze[1]
console.log (pizzaDiaviola)

console.log(pizze)
console.log(pizze [0])

pizze[0] = 'capricciosa'

console.log (pizze)






/* Destrutturazione */


pizze = [
    'Margherita',
    'Diavola',
    '4 Stagioni'
]

let [pizza1,pizza2,pizza3] =pizze;
/* sostituiesce questa sintassi vecchia ma ancora corretta

let pizza = pizze [0]
let pizza = pizze [1]
let pizza = pizze [2]

*/

console.log(pizza2)

/* conversioni*/
document.write(pizze)
document.write(pizze.toString())

/*Riordinare*/

let nomi = [
    'Mario',
    'Luca',
    'Nicole',
    'Federica',
    'Anna'

]
nomi.sort()
console.log(nomi)

/*metodi*/
let frase = "La mia pizza preferita è la Margherita";
let indice = frase.indexOf('x')
console.log(indice)

if(indice != -1){
    console.log('trovato')
}else{
    console.log('non trovato')
}
/* aggiungere e rimuovere elementi di un array*/

nomi.push('Ivons');
console.log(nomi)

let nomeEliminato = nomi.pop()//é possibile assegnare ad una variabile il risultato di pop(), in questo modo otterremo una copia di ciò che abbiamo eliminato. 

console.log(nomi)
console.log('Hai eliminato il nome'+ nomeEliminato)


nomi.splice(2,1)//[array.splice(indiceDiPartenlumeroElementiDaEliminare)]in questo modo va ad eliminare uno partendo dalla posizione 2

console.log(nomi)

nomi.splice(2,1,'Ledio')//sostituisce l'ultimo elemento con Ledio
console.log(nomi)

nomi = [ 'Mario','Luca','Nicole','Federica']
let nomi2 = ['Franceso', 'Simone','Pharell']
let nomi3 = ['Frank', 'Ector','Mark']
console.log(nomi)

let unito = nomi.concat(nomi2,nomi3)
console.log(unito)
console.log(nomi)
let x = [1,2,3,4,'ciao',[4,8,96['a','b','c'],'ciao']]
console.log (x[2])
console.log(x[5][3][0])