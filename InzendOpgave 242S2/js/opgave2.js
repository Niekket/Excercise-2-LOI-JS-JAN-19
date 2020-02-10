// Geeft de id van een HTML element terug
function id(id) {
  var input = document.getElementById(id);
  return input;
}

function allEvents() {
  id("bedraginvoer").addEventListener("keypress", bedragInvoer); // enter key voert de functie bedragInvoer uit
  id("btnbtw").addEventListener("click", btw); // onclick voert de functie btw uit
  id("resetbtn").addEventListener("click", wisInvoer); // onclick voert de functie wisInvoer uit
}
allEvents();

// check eerst of de ingevoerde waarde wel een getal is, nadat je drukt op enter(keycode13)
// komt de ingevoerde waarde terecht in het tweede tekstvak
function bedragInvoer() {
  var totaal =
    parseInt(event.target.value) + parseInt(id("totaaluitvoer").value);
  if (isNaN(id("bedraginvoer").value)) {
    alert("Voer een geldig getal in graag");
    event.target.value = 0;
  }
  // enter = keycode 13
  if (event.keyCode === 13) {
    id("totaaluitvoer").value = totaal;
    event.target.value = 0;
    var zieBtw = id("ziebtw"); // haalt <p> element op
    zieBtw.innerHTML = "U kunt nu de btw berekenen over het totaal bedrag.";
  }
}

// rekent de btw uit over de het totaal bedrag en toont op de pagina de btw & het bedrag incl btw
function btw() {
  var btw = id("btw"); // haalt <p> element op
  var invoerBtw = parseInt(id("totaaluitvoer").value);
  var deBtw = (invoerBtw / 121) * 21;
  var totaalZonderBtw = invoerBtw - deBtw;
  btw.innerHTML =
    "21% btw over het totaal bedrag = € " +
    "<strong>" +
    deBtw.toFixed(2) +
    "</strong>" +
    "<br>Totaal bedrag zonder btw = € " +
    "<strong>" +
    totaalZonderBtw.toFixed(2) +
    "</strong>";
}

// Haalt alle velden leeg
function wisInvoer() {
  id("totaaluitvoer").value = 0;
  var btw = id("btw");
  btw.innerHTML = "";
  var zieBtw = id("ziebtw");
  zieBtw.innerHTML = "";
}
