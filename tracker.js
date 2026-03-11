// variables d'état
let sun = 0
let water = 0
let breakTime = 0


// récupération des éléments HTML
let sunValue = document.getElementById("sun-value")
let waterValue = document.getElementById("water-value")
let breakValue = document.getElementById("break-value")
let totalValue = document.getElementById("total-value")

let btnSun = document.getElementById("btn-sun")
let btnWater = document.getElementById("btn-water")
let btnBreak = document.getElementById("btn-break")
let btnReset = document.getElementById("btn-reset")


// bouton Soleil
btnSun.addEventListener("click", () => {

    sun = sun + 1
    sunValue.innerText = sun

    totalValue.innerText = sun + water + breakTime

})


// bouton Eau
btnWater.addEventListener("click", () => {

    water = water + 1
    waterValue.innerText = water

    totalValue.innerText = sun + water + breakTime

})


// bouton Pause
btnBreak.addEventListener("click", () => {

    breakTime = breakTime + 1
    breakValue.innerText = breakTime

    totalValue.innerText = sun + water + breakTime

})


// bouton reset
btnReset.addEventListener("click", () => {

    sun = 0
    water = 0
    breakTime = 0

    sunValue.innerText = 0
    waterValue.innerText = 0
    breakValue.innerText = 0
    totalValue.innerText = 0

})