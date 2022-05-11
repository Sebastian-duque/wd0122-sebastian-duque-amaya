if(sessionStorage.get.getItem("tempo")){
    t = sessionStorage.get.getItem("tempo")
}

var t = 00

setInterval(function(){
    document.getElementById("tempo").innerHTML = t
}, 1000)