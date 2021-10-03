/* exported myFunction */
function myFunction() {
  alert("You're here! Thanks for coming");
}

/* exported displayDate */
function displayDate() {
  document.getElementById("onclick").innerHTML = Date();
}


/* exported changeColorWhenEnter */
function changeColorWhenEnter(e) {
  if (e.keyCode == 13) {
    changeColor();
  }
}
function changeColor(){
  var color = document.getElementById("color").value;
  document.body.style.background = color;
}



/* exported mouseOver */
function mouseOver() {
  document.getElementById("demo").style.color = "red";
}
/* exported mouseOut */
function mouseOut() {
  document.getElementById("demo").style.color = "black";
}
