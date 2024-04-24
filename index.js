const PI = 3.14
let radius
let cimcumfernce

document.getElementById("Mysubmit").onclick = function(){
    radius = document.getElementById("Mytext").value
    radius = Number(radius)
    cimcumfernce = 2 * PI * radius
    document.getElementById("H3").textContent = cimcumfernce
}