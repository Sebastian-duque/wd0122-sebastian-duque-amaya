fetch("json/menu.json")
.then(res => {
    if(res.ok)
    console.log('caricamento completato');
    return res.json()//trasforma larisposta restituendomi il risultato della pagina in formato json
    //attenzione: json() si usa solo se il tipo di dato richiesto è json
    //per gli altri usa text()
    //questo metodo restituisce una promise
}).then(res=> {
    console.log(res)//E' un array
    console.log(res[0])//E' un oggetto

    pizze.forEach(pizza => {
        document.write(pizza.gusto + '<br>')

        pizza.dimensioni.forEach( d => {
            document.write(d + ',')
        });
        document.write('<hr>')
    })
})