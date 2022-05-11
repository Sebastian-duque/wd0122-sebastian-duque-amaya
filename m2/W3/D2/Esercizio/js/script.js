
class Pagination {
        constructor(items = [], pageSize = 10) {
            this.items = items;
            this.pageSize = Math.floor(pageSize)
            this.totalPages = Math.ceil(items.length / this.pageSize) || 1
            this.currentPage = 1
        }
     
        prevPage() {
            this.currentPage = this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
            return this
        }
        nextPage() {
            this.currentPage = (this.currentPage + 1 <= this.totalPages) ? this.currentPage + 1 : this.currentPage
            return this
        }
        firstPage() {
            this.currentPage = 1
            return this
        }
        lastPage() {
            this.currentPage = this.totalPages
            return this
        }
     
        goToPage(page) {
            if (Math.sign(page) === -1) {
                this.currentPage = 1
                return this
            } else {
                this.currentPage = page > this.totalPages ? this.totalPages : Math.floor(page)
                return this
            }
        }
     
        getVisibleItems() {
            const start = this.currentPage * this.pageSize - this.pageSize;
            const end = this.currentPage * this.pageSize;
            const lista = this.items.slice(start, end);
            const wrapper = document.querySelector('#wrapper');
            let strHtml = '';
            lista.forEach((item) => {
                strHtml += `<tr><td>${item.id}</td><td>${item.nome}</td><td>${item.cognome}</td><td>${item.classe}</td></tr>`;
            });
            wrapper.innerHTML = strHtml;
        }
}
     
const users = [
        { id: 1, nome: 'Will', cognome: 'Neri', classe: 'A' },
        { id: 2, nome: 'David', cognome: 'Viola', classe: 'A' },
        { id: 3, nome: 'Frank', cognome: 'Verdi', classe: 'A' },
        { id: 4, nome: 'Gino', cognome: 'Rossi', classe: 'A' },
        { id: 5, nome: 'Alessa', cognome: 'Bianchi', classe: 'A' },
        { id: 6, nome: 'Roberta', cognome: 'Azzurro', classe: 'A' },
        { id: 7, nome: 'Mark', cognome: 'Blad', classe: 'A' },
        { id: 8, nome: 'Elisa', cognome: 'Ferrari', classe: 'A' },
    ];
     
p = new Pagination(users, 2);
p.getVisibleItems();
const primo = document.querySelector('#primo')
primo.addEventListener('click', function () {
        p.firstPage();
        p.getVisibleItems();
});
const ultimo = document.querySelector('#ultimo')
ultimo.addEventListener('click', function () {
        p.lastPage();
        p.getVisibleItems();
});
const precedente = document.querySelector('#precedente')
precedente.addEventListener('click', function () {
        p.prevPage();
        p.getVisibleItems();
});
const successivo = document.querySelector('#successivo')
successivo.addEventListener('click', function () {
        p.nextPage();
        p.getVisibleItems();
});
    
    
    

