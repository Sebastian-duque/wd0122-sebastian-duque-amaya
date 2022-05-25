class test{
    public readonly name: string;
    public email:string = "test@example.com";
   // public id: number; siccome ho usato readonly tra gli argomneti del costruttore
   //devo eliminare  questa riga o la segnerà come duplicato

    constructor(name: string, readonly id:number){
        this.name;
        this.id = id;
    }
    public checkEmail(email:string):void{
        if(this.email == email){
            throw new Error("Email già esistente")
        }
        this.email = email;
    }
}

let x = new test('Giovanni',1)
x.checkEmail('teste@example.com')

console.log(x.id, x.name)