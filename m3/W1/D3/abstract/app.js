var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Veicoli = /** @class */ (function () {
    function Veicoli(ruote, marca, modello, prezzo, tipo) {
        this.ruote = ruote;
        this.marca = marca;
        this.modello = modello;
        this.prezzo = prezzo;
        this.tipo = tipo;
    }
    Veicoli.prototype.dettaglliVeicolo = function () {
        return "Modello: ".concat(this.modello, ", Marca: ").concat(this.marca, ", Ruote: ").concat(this.ruote);
    };
    return Veicoli;
}());
var Automobili = /** @class */ (function (_super) {
    __extends(Automobili, _super);
    function Automobili() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        return _this;
    }
    Automobili.prototype.aumentaVelocita = function (vel) {
        if (vel === undefined) {
            this.speed++;
        }
        else {
            this.speed += vel;
        }
    };
    return Automobili;
}(Veicoli));
var veicolo = new Automobili(3, 'Piaggio', '', 1500, 'apecar');
veicolo.aumentaVelocita();
veicolo.aumentaVelocita(5);
console.table(veicolo);
console.table(veicolo.dettaglliVeicolo());
//# sourceMappingURL=app.js.map