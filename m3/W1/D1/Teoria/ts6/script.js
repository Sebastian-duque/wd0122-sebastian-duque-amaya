var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
//let user:User = new User();
var user = {
    name: "John",
    lastName: "John",
    age: 32,
    address: {
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
};
var user2 = {
    name: "John",
    lastName: "John",
    age: 32,
    address: {
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
};
var users = [user, user2];
