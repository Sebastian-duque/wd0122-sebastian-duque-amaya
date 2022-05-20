const APPURL = 'https://jsonplaceholder.typicode.com/users'

const target = document.querySelector('#target')

const tabella = document.createElement('table')
target.append(tabella)

let users = []

function typingEffect(element, speed){
  let text=element.innerHTML;
  element.innerHTML="";
 var i=0;
  var timer=setInterval(function(){
    if(i<text.length){
      element.append(text.charAt(i))
      i++;
    }else{
      clearInterval(timer);
    }
  },speed)
  
}

const titoloBw = document.querySelector('.titolo-bw');

setInterval(() => {
    typingEffect(titoloBw,150)
}, 3500);


function createTable(arrayTr) {

    tabella.innerHTML = ""
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
    thBottone.innerHTML = `<i class="bi bi-plus-square me-1"></i> New user`
    thBottone.setAttribute('data-bs-toggle', 'modal')
    thBottone.setAttribute('data-bs-target', '#newModal')

    thBottone.addEventListener('click', function () {

        let newTarget = document.querySelector('#modal-new')
        newTarget.innerHTML = ''

        let divNew = document.createElement('div')

        divNew.innerHTML = `
        <form id="newForm">
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
        <button id="aggiungi" type="submit" class="btn btn-success">Aggiungi</button>
        </div>
        </form>
        `

        newTarget.append(divNew)

        newBtn = document.querySelector('#aggiungi')

        let form = document.querySelector('#newForm')

        let nomeInp = document.querySelector('#nome')
        let usernameInp = document.querySelector('#username')
        let emailInp = document.querySelector('#email')
        let telefonoInp = document.querySelector('#telefono')
        let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gi
        let emailCondition
        
        form.addEventListener('input', function () {
            emailCondition = emailInp.value.match(regex)

            if (nomeInp.value.length >= 2 && usernameInp.value != '' && emailCondition && telefonoInp.value != '') {
                newBtn.setAttribute('data-bs-dismiss', 'modal')
            } else {
                newBtn.removeAttribute('data-bs-dismiss')
            }
        })


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

            if (nomeInp.value.length >= 2 && usernameInp.value != '' && emailCondition && telefonoInp.value != '') {

                fetch(APPURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(res => {

                        Swal.fire({
                            icon: 'success',
                            title: 'Utente creato',
                            html: `è stato creato il nuovo utente con id ${res.id}`
                        })

                    })
            } else {

                Swal.fire({
                    icon: 'error',
                    title: 'Attenzione!',
                    html: `Tutti i campi devono essere inseriti correttamente`
                })
            }

        })

    })

    th.append(thId, thName, thUsername, thEmail, thBottone)
    tabella.append(th)

    let page = Number.parseInt(document.querySelector(".page-item.active .page-link").innerHTML)
    let nItems = Number.parseInt(document.querySelector("#select-pag").value)
    let maxIndice = page * nItems
    for (let l = maxIndice - nItems; l < maxIndice; l++) {
        if (arrayTr.length > l) {
            tabella.append(arrayTr[l])
        }
    }
}

fetch(APPURL)
    .then(res => res.json())
    .then(res => {

        for (let j = 0; j < res.length; j++) {

            let tr = document.createElement('tr')
            tr.classList.add('tr-users')

            let id = document.createElement('td')
            id.classList.add('pe-2')
            id.innerHTML = res[j].id

            let nome = document.createElement('td')
            nome.classList.add('pe-2')
            nome.innerHTML = res[j].name

            let username = document.createElement('td')
            username.classList.add('pe-2')
            username.innerHTML = res[j].username

            let email = document.createElement('td')
            email.classList.add('pe-2')
            email.innerHTML = res[j].email

            let tdBtn = document.createElement('td')
            tdBtn.classList.add('row')

            let btnView = document.createElement('button')
            btnView.classList.add('btn', 'btn-info', 'm-1', 'p-1', 'col-12', 'col-lg-3')
            btnView.innerHTML = 'View'
            btnView.setAttribute('data-bs-toggle', 'modal')
            btnView.setAttribute('data-bs-target', '#viewModal')

            btnView.addEventListener('click', function () {

                viewTarget = document.querySelector('#modal-view')
                viewTarget.innerHTML = ''
                var divView = document.createElement('div')

                divView.innerHTML = `
            <h5 class="mb-3"><span class="fw-light fs-6">Id:</span> ${res[j].id}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Nome:</span> ${res[j].name}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Username:</span> ${res[j].username}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Email:</span> ${res[j].email}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Indirizzo:</span> ${res[j].address.street} - ${res[j].address.city} - ${res[j].address.zipcode}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Telefono:</span> ${res[j].phone}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Sito Web:</span> ${res[j].website}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Azienda:</span> ${res[j].company.name}</h5>
            `

                viewTarget.append(divView)

            })

            let btnEdit = document.createElement('button')
            btnEdit.classList.add('btn', 'btn-warning', 'p-1', 'm-1', 'col-12', 'col-lg-3')
            btnEdit.innerHTML = 'Edit'
            btnEdit.setAttribute('data-bs-toggle', 'modal')
            btnEdit.setAttribute('data-bs-target', '#editModal')
            btnEdit.setAttribute('data-id', res[j].id)
            let idEdit = btnEdit.getAttribute('data-id')

            btnEdit.addEventListener('click', function () {
                let targetEdit = document.querySelector('#modal-edit')
                targetEdit.innerHTML = ''

                let divEdit = document.createElement('div')
                divEdit.innerHTML = `
            <form id="edit-form">
            <h6>Nome:</h6>
            <input id="edit-name" class="form-control mb-3" type="text" value="${res[j].name}">
            <h6>Username:</h6>
            <input id="edit-username" class="form-control mb-3" type="text" value="${res[j].username}">
            <h6>Email:</h6>
            <input id="edit-email" class="form-control mb-3" type="email" value="${res[j].email}">
            <h6>Telefono:</h6>
            <input id="edit-phone" class="form-control mb-3" type="tel" value="${res[j].phone}">
            <div class="modal-footer">
            <button id="annulla-modifica" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annulla</button>
            <button id="edit" type="button" class="btn btn-danger">Modifica</button>
            </div>
            </form>
            `

                targetEdit.append(divEdit)

                let editBtn = document.querySelector('#edit')

                let editForm = document.querySelector('#edit-form')

                let nomeInp = document.querySelector('#edit-name')
                let usernameInp = document.querySelector('#edit-username')
                let emailInp = document.querySelector('#edit-email')
                let telefonoInp = document.querySelector('#edit-phone')
                let regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gi
                let emailCondition

                editForm.addEventListener('input', function () {
                    emailCondition = emailInp.value.match(regex)
        
                    if (nomeInp.value.length >= 2 && usernameInp.value != '' && emailCondition && telefonoInp.value != '') {
                        editBtn.setAttribute('data-bs-dismiss', 'modal')
                    } else {
                        editBtn.removeAttribute('data-bs-dismiss')
                    }
                })

                editBtn.addEventListener('click', function canc() {
                    // editBtn.removeEventListener('click', canc)

                    if (nomeInp.value.length >= 2 && usernameInp.value != '' && emailCondition && telefonoInp.value != ''){
                        fetch(APPURL + '/' + res[j].id, {
                            method: 'PATCH'
                        })
                            .then(res => {
                                if (res.status == 200) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Utente modificato!',
                                        text: `Hai modificato correttamente l'utente con id: ${idEdit}`
                                    })
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Ops!',
                                        text: `Qualcosa è andato storto!`
                                    })
                                }
                            })
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Ops!',
                            text: `Modifica i campi correttamente`
                        })
                    }

                })
            })

            let btnDelete = document.createElement('button')
            btnDelete.classList.add('btn', 'btn-danger', 'p-1', 'my-1', 'ms-1', 'pr-0', 'col-12', 'col-lg-3')
            btnDelete.innerHTML = '<i class="bi bi-trash"></i>'
            btnDelete.setAttribute('data-bs-toggle', 'modal')
            btnDelete.setAttribute('data-bs-target', '#deleteModal')
            btnDelete.setAttribute('data-id', res[j].id)
            let idDelete = btnDelete.getAttribute('data-id')

            btnDelete.addEventListener('click', function () {

                let modalDelete = document.querySelector('#modal-delete')
                modalDelete.innerHTML = ''

                let testo = document.createElement('p')
                testo.innerHTML = `Sei sicuro di voler eliminare l'utente: <h4>${res[j].name}?</h4>`

                modalDelete.append(testo)

                let btnCancella = document.querySelector('#cancella')
                btnCancella.addEventListener('click', function canc() {
                    btnCancella.removeEventListener('click', canc)

                    fetch(APPURL + '/' + idDelete, {
                        method: 'DELETE'
                    })
                        .then(res => {

                            if (res.status == 200) {

                                testo.innerHTML = ''

                                Swal.fire({
                                    icon: 'success',
                                    title: 'Utente cancellato!',
                                    text: `Hai cancellato correttamente l'utente con ID: ${idDelete}`
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
            // tabella.append(tr)
            users.push(tr)
        }

        let i = 0
        let select = document.querySelector('#select-pag')
        let selectedLength = select.options[select.selectedIndex].value
        let length = selectedLength

        let pagContainer = document.querySelector('#pagination')

        function createPageLinks() {
            let numberOfPages = res.length / selectedLength
            pagContainer.innerHTML = ''
            for (let z = 1; z <= numberOfPages; z++) {
                pagContainer.innerHTML += `<li id="li-pag${z}" class="page-item"><a class="page-link" href="#" id="pag${z}">${z}</a></li>`
                document.querySelector('#li-pag1').classList.add('active')
            }
            let pageItem = document.querySelectorAll('.page-item')
            for (let page of pageItem) {
                page.addEventListener('click', function (e) {
                    e.preventDefault()
                    document.querySelector('.active').classList.remove('active')
                    this.classList.add('active')
                    tabella.innerHTML = ''
                    i = selectedLength * (this.innerText - 1)
                    length = selectedLength * this.innerText
                    createTable(users)
                })
            }
        }

        createPageLinks()

        select.addEventListener('change', () => {
            selectedLength = select.options[select.selectedIndex].value
            tabella.innerHTML = ''
            i = 0
            length = selectedLength
            createPageLinks()
            createTable(users)
        })

        createTable(users)

        let newTarget = document.querySelector('#newTarget')
        let newTabella = document.createElement('table')
        newTarget.append(newTabella)


        let inputSearch = document.querySelector('#input-search')

        inputSearch.addEventListener('input', () => {
            createPageLinks()
            let x = [...users]

            let newUsers = []

            for (let u of x) {
                let condition = u.innerText.toLowerCase().includes(inputSearch.value.toLowerCase())

                if (condition) {

                    newUsers.push(u)

                }
            }
            
            createTable(newUsers)

        })

        let selectUsername = document.querySelector('#select-username')
        selectUsername.classList.add('form-select')
        let count = 0

        for (let user of res) {
            count++

            let username = user.username

            let optUsername = document.createElement('option')

            optUsername.setAttribute('data-id', count)
            optUsername.setAttribute('value', username)
            optUsername.innerHTML = username

            let dataUsername = document.querySelector('#data-username')

            dataUsername.append(optUsername)

            let searchBtnUsername = document.querySelector('#search-btn-username')
            // searchBtnUsername.setAttribute('data-bs-toggle', 'modal')
            // searchBtnUsername.setAttribute('data-bs-target', '#searchModal')
    
            
        }
        
        selectUsername.addEventListener('input', function () {

            createPageLinks()
            let x = [...users]
            
            let newUsers = []
            
            for (let u of x) {
                let condition = u.cells[2].innerText.toLowerCase().includes(selectUsername.value.toLowerCase())
                
                if (condition ) {
                    
                    newUsers.push(u)
                    
                }
            }

            createTable(newUsers)

        })

    })


let searchBtnId = document.querySelector('#search-btn-id')
searchBtnId.setAttribute('data-bs-toggle', 'modal')
searchBtnId.setAttribute('data-bs-target', '#searchModal')

searchBtnId.addEventListener('click', function () {

    let searchInput = document.querySelector('#search-input')
    let userId = searchInput.value

    if (userId > users.length) {
        let searchTarget = document.querySelector('#modal-search')
        searchTarget.innerHTML = ''
        var divSearch = document.createElement('div')

        divSearch.innerHTML = `
        <h5 class="mb-3">Non è stato trovato alcun utente con id: ${userId}</h5>
        `
        searchTarget.append(divSearch)

        searchInput.value = ''

    } else if (userId == '' || userId == 0) {
        let searchTarget = document.querySelector('#modal-search')
        searchTarget.innerHTML = ''
        var divSearch = document.createElement('div')

        divSearch.innerHTML = `
        <h5 class="mb-3">Inserisci un ID valido!</h5>
        `
        searchTarget.append(divSearch)

        searchInput.value = ''
    } else {
        fetch(APPURL + '/' + userId)
            .then(res => res.json())
            .then(res => {

                let searchTarget = document.querySelector('#modal-search')
                searchTarget.innerHTML = ''
                var divSearch = document.createElement('div')

                divSearch.innerHTML = `
            <h5 class="mb-3"><span class="fw-light fs-6">Id:</span> ${res.id}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Nome:</span> ${res.name}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Username:</span> ${res.username}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Email:</span> ${res.email}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Indirizzo:</span> ${res.address.street} - ${res.address.city} - ${res.address.zipcode}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Telefono:</span> ${res.phone}</h5>
            <h5 class="mb-3"><span class="fw-light fs-6">Sito Web:</span> ${res.website}</h5>
            <h5><span class="fw-light fs-6">Azienda:</span> ${res.company.name}</h5>
            `

                searchTarget.append(divSearch)

                searchInput.value = ''

            })
    }

})

