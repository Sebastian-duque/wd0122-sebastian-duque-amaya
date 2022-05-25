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
//Enumeratori
var Months;
(function (Months) {
    Months[Months["Gennaio"] = 1] = "Gennaio";
    Months[Months["Febbario"] = 2] = "Febbario";
    Months[Months["MArzo"] = 3] = "MArzo";
    Months[Months["Aprile"] = 4] = "Aprile";
})(Months || (Months = {}));
console.log(Months.Gennaio, Months[1]);
console.log(Months.Aprile);
console.log(Months);
var Color;
(function (Color) {
    Color["Bianco"] = "#fff";
    Color["Nero"] = "#000";
})(Color || (Color = {}));
var colore = Color.Bianco;
//Funzioni e Ogetti
var states = {
    italy: 'Rome',
    england: 'London',
    id: function () {
        return this.italy + '' + this.england;
    }
};
console.log(states.italy, states.england, states.id());
function somma(a, b, c) {
    return a + b;
}
var Car = /** @class */ (function () {
    function Car(mod, mar, col, p) {
        this.scontoRivenditore = 30; //Le propietà protected/private non sono accessibili dall'esterno.
        this.modello = mod;
        this.marca = mar;
        this.colore = col;
        this.prezzo = p;
    }
    Car.prototype.dettagliAuto = function () {
        return this.modello + " " + this.marca + " " + this.colore;
    };
    Object.defineProperty(Car.prototype, "cambiaScontoRivenditore", {
        set: function (n) {
            this.scontoRivenditore = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "prezzoFinale", {
        get: function () {
            return this.prezzo - ((this.prezzo * this.scontoRivenditore) / 100) + '€';
        },
        enumerable: false,
        configurable: true
    });
    Car.nazione = function () {
        console.log(this.stato);
    };
    //perciò non si può fare console.log(bmw.scontoRivenditore)
    Car.stato = 'Germany';
    return Car;
}());
var bmw = new Car('i8', 'bmw', 'Nero', 129000);
console.log(bmw.modello);
console.log(bmw.prezzoFinale);
bmw.cambiaScontoRivenditore = 20;
console.log(bmw.prezzoFinale);
console.log(bmw);
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
var apecar = new Veicoli(3, 'Piaggio', '', 1500, 'apecar');
var Cars = /** @class */ (function (_super) {
    __extends(Cars, _super);
    function Cars(marca, modello, prezzo) {
        var _this = _super.call(this, 4, marca, modello, prezzo, 'Automobili') || this;
        _this.autoradio = true;
        _this.costoPieno = 80;
        return _this;
    }
    return Cars;
}(Veicoli));
var auto = new Cars('bmw', 'i8', 150000);
console.log(auto);
var ElecticCars = /** @class */ (function (_super) {
    __extends(ElecticCars, _super);
    function ElecticCars() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElecticCars.prototype.cambiaCostoPieno = function () {
        // this.costoPieno = 30;//La proprietà costo pieno non è accessibile dalla sottoclasse.
    };
    return ElecticCars;
}(Cars));
var autoElettrica = new ElecticCars('bmw', 'i8 elettrica', 150000);
console.log(autoElettrica);
//# sourceMappingURL=app.js.map