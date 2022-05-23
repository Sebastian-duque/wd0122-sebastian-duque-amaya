var player;
var player2;
var randomNumber;
var scarto1;
var scarto2;
var arr = true;
while (arr) {
    for (var i = 0; i < 90; i++) {
        randomNumber = Math.floor(Math.random() * 99 + 1);
        console.log(randomNumber);
    }
    var player1 = prompt("player1, gioca nunero casule:");
    var player2_1 = prompt("player2, play a random number:");
    if (player1 == randomNumber) {
        alert("player1 you guessed!!!");
    }
    else {
        scarto1 = Math.abs(randomNumber - player1);
    }
    if ({}(player2_1 == randomNumber)) {
        alert("player2 you guessed!!!");
    }
}
{
    scarto2 = Math.abs(randomNumber - player2);
}
if (scarto1 < scarto2) {
    alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 1 si è avvicinato di più! il numero era " + randomNumber);
}
else {
    alert("Nessuno dei due ha azzeccato il numero casuale, ma il giocatore 2 si è avvicinato di più! il numero era " + randomNumber);
}
arr = confirm("Vuoi giocare di nuovo?");
