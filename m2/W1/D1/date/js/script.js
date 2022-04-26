let now = new Date();
console.log(now);//Data attuale
console.log(now.getTime());// timestamp  
console.log(now.getDay)//numero del giorno della settimana

let future = new Date()

let futureMibutes = future.getMinutes();
future.setMinutes(futureMinutes + 51)
console.log(future);

if(now.getTime() < future.getTime){
    //fai qualcosa
}
/* Intervalli 
setInterval(fn,milliseconds)
*/

setInterval(function(){
    let n = new Date()
    document.querySelector('#secondi').innerHTML = n.getMinutes + ' : '+ n.getSeconds()
},1000)

/*
 function secondi(){
     let n = new Date();
     document.querySelector('#secondi').innerHTML = n.getSeconds()
    }
    setInterval(secondi,1000)
*/