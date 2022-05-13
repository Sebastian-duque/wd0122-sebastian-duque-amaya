
 async function getUser(){
     let url = 'users.json';
  
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
                            console.log(users);
            html += htmlSegment;
        });
    
        let container = document.querySelector('.container');
        container.innerHTML = html;
    }
    
    renderUsers();