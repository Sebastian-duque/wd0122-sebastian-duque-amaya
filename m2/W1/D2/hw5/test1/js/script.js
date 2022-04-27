function iniziaShopping() {

    let budget = 2000;
    let compere = 0;

    while (budget > 0) {

        let prezzi = Math.floor(Math.random() * 5000);

        if (prezzi <= budget) {
            compere += 1;
            budget -= prezzi;

            document.getElementById('mio_budget').innerHTML += '<p> Soldi spesi: € ' + prezzi + '<br> Budget aggiornato: € ' + budget + '<p>';
        }

        if (budget < 500 && budget + pezzi >= 500) {
            document.getElementById('mio_budget').innerHTML = 'hai meno di 500€. Ora basta stai spendendo troppo';
            
        }

    }

    document.getElementById('mio_budget').innerHTML += '<p>Hai acquistato: ' + compere + ' oggetti </p>';

}