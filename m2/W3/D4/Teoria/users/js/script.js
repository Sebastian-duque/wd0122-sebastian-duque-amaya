const APPURL = 'https://sofin.wp-admin.it/public/api/v1/user'

let tabella = document.querySelector('#utenti')

fetch(APPURL)
.then(res=> res.json())
.then(res => {

    console.log(res)
    for(let utente of res){
        let tr = document.createElement('tr')

        let tdNome =document.createElement('td')
        tdNome.innerHTML = utente.name
        let tdCognome =document.createElement('td')
        tdCognome.innerHTML = utente.lastname

        tr.append(tdNome, tdCognome)
        tabella.append(tr)

    }
})