//con create element genero un elemento html in memoria e lo metto nella variabile
//IN NESSUN MODO QUESTO METODO MOSTRA IL TAG  NELL'HTML
let div = document.createElement("div");//<div></div>
div.innerHTML = 'test';
div.classList.add("classeProva")


div.innerHTML = 'test2';
div.classList.add("classeProva")

document.querySelector('#html-generato').append(div)
document.querySelector('#html-generato').prepend(div)

let bottone = document.querySelector('#inserisci')
let toDoArea = document.querySelector('#to-do')
bottone.addEventListener('click', function(){
    let testo = document.querySelector('#testo')

    let todoWrap = document.createElement('div')
    todoWrap.classList.add("todo")
    todoWrap.innerText = testo.value

    toDoArea.append(todoWrap)
    
    // per svuotare il campo de
    testo.value = ''
})

