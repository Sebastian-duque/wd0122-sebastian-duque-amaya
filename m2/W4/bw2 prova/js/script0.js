
const APPURL = 'https://jsonplaceholder.typicode.com/users'

const target = document.querySelector('#target')

const tabella = document.createElement('table')
target.append(tabella)


fetch(APPURL)
    .then(res => res.json())
    .then(res => {
        function createTable() {
            let th = document.createElement('tr')
            th.classList.add('tr-th')

            let thId = document.createElement('th')
            thId.innerHTML = "ID"
            let thName = document.createElement('th')
            thName.innerHTML = "Nome"
            let thUsername = document.createElement('th')
            thUsername.innerHTML = "Username"
            let thEmail = document.createElement('th')
            thEmail.innerHTML = "Email"
            let thBottone = document.createElement('button')
            thBottone.classList.add('btn', 'btn-success', 'm-1')
            thBottone.innerHTML = "Add new user"
            thBottone.setAttribute('data-bs-toggle', 'modal')
            thBottone.setAttribute('data-bs-target', '#newModal')

            thBottone.addEventListener('click', function () {
                // e.preventDefault()
                let newTarget = document.querySelector('#modal-new')
                newTarget.innerHTML = ''

                let divNew = document.createElement('div')

                divNew.innerHTML = `
            <form>
            <h6>Nome:</h6>
            <input id="nome" class="form-control mb-3" type="text" placeholder="Nome e Cognome" required minlength="6">
            <h6>Username:</h6>
            <input id="username" class="form-control mb-3" type="text" placeholder="Username" required>
            <h6>Email:</h6>
            <input id="email" class="form-control mb-3" type="email" placeholder="Email" required>
            <h6>Telefono:</h6>
            <input id="telefono" class="form-control mb-3" type="tel" placeholder="Telefono" required>
            <div class="modal-footer">
            <button id="annulla-new" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
            <button id="aggiungi" type="submit" class="btn btn-danger" data-bs-dismiss="modal">Aggiungi</button>
            </div>
            </form>
            `



                newTarget.append(divNew)


                newBtn = document.querySelector('#aggiungi')

                newBtn.addEventListener('click', function (e) {
                    e.preventDefault()
                    let nome = document.querySelector('#nome').value
                    let username = document.querySelector('#username').value
                    let email = document.querySelector('#email').value
                    let telefono = document.querySelector('#telefono').value


                    let newUser = {
                        name: nome,
                        username: username,
                        email: email,
                        phone: telefono
                    }
                    if (nome && username) {
                        fetch(APPURL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(newUser)
                        })
                            //.then(res => res.json())
                            .then(res => {
                                console.log(res);
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Utente creato',
                                    html: `è stato creato il nuovo utente con id ${res.id}`,
                                })

                            })
                    } else {
                        console.log(nome);
                        console.log(nome);
                    }

                })


            })

            th.append(thId, thName, thUsername, thEmail, thBottone)
            tabella.append(th)

            for (i; i < length; i++) {
                console.log(res[i]);
                let tr = document.createElement('tr')
                tr.classList.add('tr-users')

                let id = document.createElement('td')
                id.classList.add('pe-2')
                id.innerHTML = res[i].id

                let nome = document.createElement('td')
                nome.classList.add('pe-2')
                nome.innerHTML = res[i].name

                let username = document.createElement('td')
                username.classList.add('pe-2')
                username.innerHTML = res[i].username

                let email = document.createElement('td')
                email.classList.add('pe-2')
                email.innerHTML = res[i].email

                let tdBtn = document.createElement('td')

                let btnView = document.createElement('button')
                btnView.classList.add('btn', 'btn-info', 'm-1')
                btnView.innerHTML = 'View'
                btnView.setAttribute('data-bs-toggle', 'modal')
                btnView.setAttribute('data-bs-target', '#viewModal')

                btnView.addEventListener('click', function () {

                    viewTarget = document.querySelector('#modal-view')
                    viewTarget.innerHTML = ''
                    var divView = document.createElement('div')

                    divView.innerHTML = `
                <h5>Id: ${res[i].id}</h5>
            <h5>Nome: ${res[i].name}</h5>
            <h5>Username: ${res[i].username}</h5>
            <h5>Email: ${res[i].email}</h5>
            <h5>Indirizzo: ${res[i].address.street} - ${res[i].address.city} - ${res[i].address.zipcode}</h5>
            <h5>Telefono: ${res[i].phone}</h5>
            <h5>Sito Web: ${res[i].website}</h5>
            <h5>Azienda: ${res[i].company.name}</h5>
            `

                    viewTarget.append(divView)

                })


                let btnEdit = document.createElement('button')
                btnEdit.classList.add('btn', 'btn-warning', 'm-1')
                btnEdit.innerHTML = 'Edit'
                btnEdit.setAttribute('data-bs-toggle', 'modal')
                btnEdit.setAttribute('data-bs-target', '#editModal')

                btnEdit.addEventListener('click', function () {
                    let targetEdit = document.querySelector('#modal-edit')
                    targetEdit.innerHTML = ''

                    let divEdit = document.createElement('div')
                    divEdit.innerHTML = `
            <h6>Nome:</h6>
            <input class="form-control mb-3" type="text" value="${res[i].name}">
            <h6>Username:</h6>
            <input class="form-control mb-3" type="text" value="${res[i].username}">
            <h6>Email:</h6>
            <input class="form-control mb-3" type="email" value="${res[i].email}">
            <h6>Telefono:</h6>
            <input class="form-control mb-3" type="tel" value="${res[i].phone}">
            `

                    targetEdit.append(divEdit)

                    let editBtn = document.querySelector('#edit')

                    editBtn.addEventListener('click', function () {
                        fetch(APPURL + '/' + res[i].id, {
                            method: 'PATCH'
                        })
                            .then(res => {
                                if (res.status == 200) {

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Utente modificato!',
                                        text: `Hai modificato correttamente l'utente`
                                    })
                                } else {

                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Ops!',
                                        text: `Qualcosa è andato storto!`
                                    })
                                }
                            })
                    })


                })

                let btnDelete = document.createElement('button')
                btnDelete.classList.add('btn', 'btn-danger', 'm-1')
                btnDelete.innerHTML = 'Delete'
                btnDelete.setAttribute('data-bs-toggle', 'modal')
                btnDelete.setAttribute('data-bs-target', '#deleteModal')

                btnDelete.addEventListener('click', function () {

                    let modalDelete = document.querySelector('#modal-delete')
                    modalDelete.innerHTML = ''

                    let testo = document.createElement('p')
                    testo.innerHTML = `Sei sicuro di voler eliminare l'utente: <h4>${res[i].name}?</h4>`

                    modalDelete.append(testo)

                    let btnCancella = document.querySelector('#cancella')
                    btnCancella.addEventListener('click', function () {

                        fetch(APPURL + '/' + res[i].id, {
                            method: 'DELETE'
                        })
                            .then(res => {

                                if (res.status == 200) {

                                    testo.innerHTML = ''

                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Utente cancellato!',
                                        text: `Hai cancellato correttamente l'utente: ${res[i].name}`
                                    })
                                } else {
                                    testo.innerHTML = ''

                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Ops!',
                                        text: `Qualcosa è andato storto!`
                                    })
                                }

                            })

                    })

                })

                tdBtn.append(btnView, btnEdit, btnDelete)

                tr.append(id, nome, username, email, tdBtn)
                tabella.append(tr)

            }

        }

        let i = 0
        let select = document.querySelector('select')
        let selectedLength = select.options[select.selectedIndex].value
        let length = selectedLength

        
        let pag1 = document.querySelector('#pag1')
        let pag2 = document.querySelector('#pag2')
        let pag3 = document.querySelector('#pag3')
        let pag4 = document.querySelector('#pag4')
        let pag5 = document.querySelector('#pag5')

        let pagination = document.querySelectorAll('#pagination button')
        

        select.addEventListener('change', () => {
            selectedLength = select.options[select.selectedIndex].value
            tabella.innerHTML = ''
            i = 0
            length = selectedLength
            createTable()
            if(selectedLength == 2){
                for(let pag of pagination){
                    pag.style.display = 'inline-block'
                }
            }else if(selectedLength == 5){
                pag1.style.display = 'inline-block'
                pag2.style.display = 'inline-block'
                pag3.style.display = 'none'
                pag4.style.display = 'none'
                pag5.style.display = 'none'
            }else if(selectedLength == 10){
                for(let pag of pagination){
                    pag.style.display = 'none'
                }
            }

            
        })
        

        pag1.addEventListener('click', () => {
            tabella.innerHTML = ''
            i = selectedLength * (pag1.innerText - 1)
            length = selectedLength * pag1.innerText
            createTable()
        })
        pag2.addEventListener('click', () => {
            tabella.innerHTML = ''
            i = selectedLength * (pag2.innerText - 1)
            length = selectedLength * pag2.innerText
            createTable()
        })
        pag3.addEventListener('click', () => {
            tabella.innerHTML = ''
            i = selectedLength * (pag3.innerText - 1)
            length = selectedLength * pag3.innerText
            createTable()
        })
        pag4.addEventListener('click', () => {
            tabella.innerHTML = ''
            i = selectedLength * (pag4.innerText - 1)
            length = selectedLength * pag4.innerText
            createTable()
        })
        pag5.addEventListener('click', () => {
            tabella.innerHTML = ''
            i = selectedLength * (pag5.innerText - 1)
            length = selectedLength * pag5.innerText
            createTable()
        })

        createTable()

    })





