/*let date = document.getElementById("data")

let oggi = new Date()
let giorno = `${oggi.getdate() < 10 ? '0' : ''}${
    oggi.getDate()}`

let mese = `${(oggi.getMonth() + 1) < 10 ? '0' : ''}${oggi.getMonth() + 1}`
let anno = oggi.getFullYear()
data.textContent = `${giorno}/${mese}/${anno}`*/

/*let dataAttuale = new Date
console.log(dataAttuale)

let dataSpecifica = new Date(2022,5)
console.log(dataSpecifica)

let dataStringa = new Date("25 Febraury 2021 18:35:00")
document.write(dataStringa)
console.log(dataStringa)

let milliseconds = Date.parse("May 25, 2021")
console.log(milliseconds)
let date = Date(2222-10-25)
console.log(date)
*/

/*let day;
day = new Date ()
day = new Date(2121312441)
day = new Date(2022, 8, 3, 12, 30, 20, 0)



console.log(day.toString())
console.log(day.getFullYear)
console.log(day.getMonth)
*/

let today = new Date
let date = today.getDay() + ' / ' + (today.getMonth() + 1) + ' / ' + today.getFullYear()

document.getElementById("currentDate").innerHTML = date;

function startTime() {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()

    var time = hours + ':' + minutes + ':' + seconds;
    document.getElementById("currentTime").innerHTML = time;
    setTimeout(function () { startTime(); }, 1000)
}
