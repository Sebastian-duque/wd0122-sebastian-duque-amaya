let richiesta = new XMLHttpRequest();// Inizializzo l'oggetto

richiesta.open('GET','http://sofin.wp-admin.it/public/api/api/v1/user')
richiesta.onload = function(res){
    //console.log(richiesta.response)
    console.log(res)
}
richiesta.send()//avvio la richiesta

fetch('https://isonplaceholder.typicode.com/users')
.then (data => data.json())
.then (data => {

    console.log(data);
    for(let user of data){
        let div = document.createElement('div');
        div.innerHTML = user.name
        document.querySelector('#target').append(div)
    }
})

let j = '{"name":"mario","eta":30}'

