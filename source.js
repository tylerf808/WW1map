// Get the modal
var modal = document.getElementById("text1");

// Get the button that opens the modal
var btn = document.getElementById("btn1");

const btn14 = document.getElementById("14");
const btn15 = document.getElementById("15");
const btn16 = document.getElementById("16");
const btn17 = document.getElementById("17");
const btn18 = document.getElementById("18");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

btn14.onclick = function () {
    btn.hidden = false;
}

btn15.onclick = function () {
    btn.hidden = true;
}