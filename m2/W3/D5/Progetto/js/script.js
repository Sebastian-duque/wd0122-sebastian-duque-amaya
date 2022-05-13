
/*const JSON = './json/libri.json'
let tabella = document.querySelector('#table')

        fetch('JSON')
        .then(res => res.json())
        .then(res => {

            console.log(res);

            for(let table of res){
                
                let tr = document.createElement('tr')


                let tdWriter = document.createElement('td')
                tdWriter.innerHTML = utente.writer

                let tdBorn = document.createElement('td')
                tdBorn.innerHTML = utente.born
                tr.append(tdWriter, tdBorn, Bestseller, Books)

                let tdBestseller = document.createElement('td')
                tdBestseller.innerHTML = utente.bestseller
                tr.append(tdWriter, tdBorn, Bestseller, Books)

                let tdBooks = document.createElement('td')
                tdBooks.innerHTML = utente.books
                tr.append(tdWriter, tdBorn, Bestseller, Books)

                let tdAzioni = document.createElement('td')

                let btnElimina = document.createElement('button')
                btnElimina.innerHTML = 'Elimina'

            

                tdAzioni.append(btnElimina)


                tr.append(tdAzioni)
                
               
               tabella.append(tr)

                
            }

        })*/
 /*let response = fetch(url)

 fetch('users.json')
 .then(response => response.json())
 .then()
*/
 async function getUser(){
     let url = './users.json';
     try {
         let response = await fetch(url);
         return await response.json();
     }catch(error){

     }
    }
    async function renderUsers() {
        let users = await getUsers();
        let html = '';
        users.forEach(user => {
            let htmlSegment = `<div class="user">
                                <img src="${user.profileURL}" >
                                <h2>${user.firstName} ${user.lastName}</h2>
                                <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            </div>`;
    
            html += htmlSegment;
        });
    
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }
    
    renderUsers();