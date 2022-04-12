//function sfondoRosso(e){
   /* let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe blocco
    blocchi[e].style.backgroundColor = 'red'*/
   // console.log(e)
    //let colore = e.getAttribute('data-colore')
   // console.log(colore)
   // if(e.style.backgroundColor == ''){
   //     e.style.backgroundColor = colore
  //  }
    
   // else{
   //     e.style.backgroundColor = ''
   // }
//}
function cambiaSfondo(e){
    /* let blocchi = document.getElementsByClassName('blocco')//array di elementi con la classe blocco
     blocchi[e].style.backgroundColor = 'red'*/
     console.log(e)
     let colore = e.getAttribute('data-colore')
     console.log(colore)
     if(e.style.backgroundColor == ''){
         e.style.backgroundColor = colore
     }
     
     else{
         e.style.backgroundColor = ''
     }
 }
 
