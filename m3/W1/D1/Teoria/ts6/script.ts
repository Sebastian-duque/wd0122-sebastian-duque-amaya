class User{
    name!: string;
    lastName!: string;
    age!: number;
    address!: string;
}

class Address{
    via!: string;
    civico!: number;
    citta!: string
}

//let user:User = new User();
let user:User ={
    name: "John",
    lastName: "John",
    age:32
    address:{
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
}
let user2:User ={
    name: "John",
    lastName: "John",
    age:32
    address:{
        via: 'Roma',
        civico: 1,
        citta: 'Milano'
    }
}

let users:User[] = [user, user2];