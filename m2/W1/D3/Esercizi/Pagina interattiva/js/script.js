let lista = document.querySelectorAll('li');

for (var i = 0; o < lista.length; i++) {

    lista[i].addEventListener('mouseover', function() {
        this.classList.add('selezione');
    });

    lista[i].addEventListener('mouseout', function() {
        this.classList.remove('selezione');
    });

    lista[i].addEventListener('click', function() {
        this.classList.toggle('fatto');
    });
}
var ul = document. getElementsByTagName ("li")

for(let i=0; i < ul.length; i++){
    ul[i].addEventListener("mouseover",function(){
    this.classList.add("over")
    })
    ul[i].addEventListener("mouseleave",function(){
        this.classList.remove("over")
    })
    ul(i).addEventListener("click",function(){
        this.classList.toggle("completato")
    })

}