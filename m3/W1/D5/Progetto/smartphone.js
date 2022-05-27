var FirstUser = /** @class */ (function () {
    function FirstUser(carica, numeroChiamate) {
        this.carica = 20;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = 0.20;
        var x = this.carica;
        console.log(x);
    }
    FirstUser.prototype.ricarica = function () { };
    FirstUser.prototype.chiamata = function () {
    };
    FirstUser.prototype.azzeraChiamate = function () { };
    return FirstUser;
}());
var SecondUser = /** @class */ (function () {
    function SecondUser() {
    }
    SecondUser.prototype.azzeraChiamate = function () {
        throw new Error("Method not implemented.");
    };
    SecondUser.prototype.ricarica = function () {
        throw new Error("Method not implemented.");
    };
    SecondUser.prototype.chiamata = function () {
        throw new Error("Method not implemented.");
    };
    return SecondUser;
}());
var ThirdUser = /** @class */ (function () {
    function ThirdUser() {
    }
    ThirdUser.prototype.azzeraChiamate = function () {
        throw new Error("Method not implemented.");
    };
    ThirdUser.prototype.ricarica = function () {
        throw new Error("Method not implemented.");
    };
    ThirdUser.prototype.chiamata = function () {
        throw new Error("Method not implemented.");
    };
    return ThirdUser;
}());
