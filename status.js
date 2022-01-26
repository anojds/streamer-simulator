function view() {
var viewran = Math.floor(Math.random()*(790-770+1)) + 770;
document.getElementById("viewnumber").innerHTML = viewran;
}
let viewcountstarts = setInterval(view, 3000);
