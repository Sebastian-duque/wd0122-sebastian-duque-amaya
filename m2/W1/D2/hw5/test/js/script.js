
let budget = 2000;
let acquisti = 0;

function iniziaAcquisti(budget,acquisti) {
    while(budget > 0){

         prezzi = Math.floor(Math.random() * 100)

        if(prezzi <= budget){
            acquisti += 1; budget -= prezzi;
            document.getElementById('budget').innerHTML += '<p> Quantità di denaro speso: £ ' + prezzi + '<br>Budget aggiornato: £ ' + budget + '<p>'
        }

    }
    if (budget < 500 && budget + pezzi >= 500) {
        document.getElementById('budget').innerHTML = 'Saldo sotto i 500£.'
    
    }
    document.getElementById('budget').innerHTML += '<p>Hai acquistato: ' + acquisti + ' oggetti </p>';
}