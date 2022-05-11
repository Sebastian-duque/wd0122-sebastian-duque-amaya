document.getElementById("login").addEventListener("click",function(){
    let nome = document.getElementById("nome").value
    localStorage.setItem("nome",nome)
})
document.querySelector("logout").addEventListener("click",function(){
    localStorage.removeItem()
})