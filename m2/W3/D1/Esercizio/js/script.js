class List{
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}
class UI{
    static displayUtenti(){
        const UiList = [

        ];

        const lists = UiList;
        lists.forEach((list) => UI.addUtenteToList(list));
    }
    
    static addUtenteToList(list){
        const lista = document.querySelector('#lista-utenti');

        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${utente.nome}</td>
        <td>${utente.cognome}</td>
        <td>${utente.età}</td>
        <td></td>
        
        `;

        lista.appendChild(row);
    }

}



document.addEventListener('DOMContentLoaded', UI.displayUtenti)


document.querySelector('#list-form').addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const age = document.querySelector('#age').value;

    const list = new list(name, surname, age);
    
    UI.addUtenteToList;

})


