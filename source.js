// Get the modal
var modal = document.getElementById("text1");

// Get the button that opens the modal
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");

// Get buttons for the year
const btn14 = document.getElementById("14");
const btn15 = document.getElementById("15");
const btn16 = document.getElementById("16");
const btn17 = document.getElementById("17");
const btn18 = document.getElementById("18");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function () {
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
    btn1.hidden = false;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;
}

btn15.onclick = function () {
    btn1.hidden = true;
    btn2.hidden = false;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = true;
}

btn16.onclick = function () {
    btn1.hidden = true;
    btn2.hidden = true;
    btn3.hidden = false;
    btn4.hidden = true;
    btn5.hidden = true;
}

btn17.onclick = function () {
    btn1.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = false;
    btn5.hidden = true;
}

btn18.onclick = function () {
    btn1.hidden = true;
    btn2.hidden = true;
    btn3.hidden = true;
    btn4.hidden = true;
    btn5.hidden = false;
}