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
var Lavoratore = /** @class */ (function () {
    function Lavoratore(codredd, redditoAnnualeLordo, tasseInps, tasseIperf) {
        this.codredd = codredd;
        /*this.redditoAnnualeLordo = redditoAnnualeLordo;
         this.tasseInps = tasseInps;
         this.tasseIperf = tasseIperf;*/
    }
    Lavoratore.prototype.getUtileTasse = function (redditoAnnualeLordo, codredd) {
        return this.redditoAnnualeLordo;
    };
    return Lavoratore;
}());
var Artigiano = /** @class */ (function (_super) {
    __extends(Artigiano, _super);
    function Artigiano() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Artigiano.prototype.getRedditoAnnuoNetto = function () {
    };
    return Artigiano;
}(Lavoratore));
var LiberoProfessionista = /** @class */ (function (_super) {
    __extends(LiberoProfessionista, _super);
    function LiberoProfessionista() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LiberoProfessionista.prototype.getRedditoAnnuoNetto = function () {
    };
    return LiberoProfessionista;
}(Lavoratore));
var Commerciante = /** @class */ (function (_super) {
    __extends(Commerciante, _super);
    function Commerciante() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Commerciante.prototype.getRedditoAnnuoNetto = function () {
    };
    return Commerciante;
}(Lavoratore));
//# sourceMappingURL=start.js.map