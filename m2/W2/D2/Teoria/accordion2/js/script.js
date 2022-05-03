let buttons = document.querySelectorAll('button')
let contents = document.querySelectorAll('.content')

/*for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener('click',function(){
        contents[i].classList.toggle('open')
    })
}*/
for(let button of buttons){
    button.addEventListener('click',function(){
        let altriOpen = document.querySelector('.content.open')
        if(altriOpen != null)
        altriOpen.classList.remove('open')

        let target = button.getAttribute('data-target')
        document.querySelector(target).classList.toggle('open')
    })
}
/*
Si può fare anche con il forEach
buttons.forEach(button,i) =>{
    button.addEventListener('click',function(){
        button.nextElementSiblingt.classList.toggle('open')
        bottone.nextElementSiblingt.id = 'button-' +i
    })

}*/