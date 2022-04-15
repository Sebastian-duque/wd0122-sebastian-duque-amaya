alert('Start')
alert('.')
alert('The Dream Calculator')

function addNumero(tasto){
    let numero = tasto.innerHTML
    let display = document.querySelector('#display')
    display.value += numero
    
}
function risultato (){
    let display = document.querySelector('#display')
    let totale = eval(display.value)
    display.value = totale
}
function multiply(){
    let display = document.querySelector('#display')
    display.value += '*'
}
function de(){
    let display = document.querySelector('#display')

    display.value = ''
 }
 function divided(){
    let display = document.querySelector('#display')
    display.value += '/'
}

function play() {
    var audio = document.getElementById ("audio") ;
    audio.play();
    audio.volume = 0.1;
}

 