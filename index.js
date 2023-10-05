var arrowRight = window.document.getElementById("arrowRight")
var one = window.document.getElementById("one")
var two = window.document.getElementById ("two")
var three = window.document.getElementById ("three")
var four = window.document.getElementById ("four")
var arrowLeft = window.document.getElementById("arrowLeft")


function rollRight() {
    one.style = "display:none"
    four.style = "display:flex"
}

function rollLeft() {
    one.style = "display:flex"
    four.style = "display:none"
}