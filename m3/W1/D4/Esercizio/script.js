var APPURL = "Abbigliamento.json";
var objs = [];
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, capo, collezione, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoivaesclusa = prezzoivaesclusa;
        this.prezzoivainclusa = prezzoivainclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    return Abbigliamento;
}());
console.log(Abbigliamento);
fetch(APPURL)
    .then(function (res) { return res.json(); })
    .then(function (res) {
    console.log(res);
    for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
        var a = res_1[_i];
        console.log(a);
    }
});
