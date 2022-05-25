var test = /** @class */ (function () {
    // public id: number; siccome ho usato readonly tra gli argomneti del costruttore
    //devo eliminare  questa riga o la segnerà come duplicato
    function test(name, id) {
        this.id = id;
        this.email = "test@example.com";
        this.name;
        this.id = id;
    }
    test.prototype.checkEmail = function (email) {
        if (this.email == email) {
            throw new Error("Email già esistente");
        }
        this.email = email;
    };
    return test;
}());
var x = new test('Giovanni', 1);
x.checkEmail('teste@example.com');
console.log(x.id, x.name);
function add(a) {
    return a;
}
var res = add('cioa');
console.log(res);
var res2 = add(8875);
console.log(res2);
var CustomArray = /** @class */ (function () {
    function CustomArray() {
        this.arr = []; //Qualunque dato che scrivo nell' array
    }
    CustomArray.prototype.getItems = function () {
        return this.arr;
    };
    CustomArray.prototype.addItem = function (item) {
        this.arr.push(item);
    };
    CustomArray.prototype.removeItem = function (item) {
        var start = this.arr.indexOf(item);
        if (start != -1) {
            this.arr.splice(start, 1);
        }
    };
    CustomArray.prototype.removeItem2 = function (item) {
        var start = this.arr.filter(function (i) { return i !== item; });
    };
    return CustomArray;
}());
var array = new CustomArray();
array.addItem('ciao');
array.addItem('ciao2');
array.addItem('ciao3');
array.removeItem('ciao2');
console.log(array.getItems());
var arrayNum = new CustomArray();
arrayNum.addItem(1);
arrayNum.addItem(2);
arrayNum.addItem(3);
console.log(arrayNum.getItems());
var k = {
    key: 'id',
    value: 0
};
var d = {
    key: 6,
    value: 0
};
//TUPLE
var user = [1, 'Giovanni', {}];
var id = user[0], obj = user[1]; // NOn confondere con assegnamento in destrutturazione
console.log(id);
//Matrici di tuplet
var userArr = [
    [1, 'Giovanni'],
    [2, 'Maria'],
    [3, 'Gigi']
];
console.log(userArr);
var arr = ['ciao'];
var arr2 = ['ciao', 'ciao2'];
//# sourceMappingURL=app.js.map