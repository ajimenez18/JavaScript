document.write("<h1>Tasca 1</h1>")

var a = prompt("Escriu un número");
var b = prompt("Escriu altre número");

document.write("<h3>Aquest és mes gran</h3>")
if (a > b) {
document.write(a);
} else if (b > a) {
document.write(b);
}

document.write("<h3>Aquest és mes petit</h3>")
if (a < b) {
document.write(a);
} else if (b < a) {
document.write(b);
}

document.write("<h3>Son iguals?</h3>")
if (a == b) {
document.write("Has introduit " +a+ " y " +b+ " que son iguals!");
}
else {
  document.write("No son iguals");
}


document.write("<h1>Tasca 2</h1>")
document.write("<h3>Taula de multiplicar demanada</h3>")

var c = window.prompt("¿Quina taula de multiplicar vols saber?")
var d = 0;

for (d = 1; d <= 10; d++){
variable = c * d;
document.write(+c+" x "+d+" = "+ variable);
document.write("<br>")
}


document.write("<h1>Tasca 3</h1>")

var nom = prompt("Introdueix el teu nom i cognoms");
var any = prompt("Introdueix la teva edat");
var cog = prompt("Introdueix el teu correu electrònic");

{
document.write("Hola "+nom+"!</br><br>Moltes gràcies per presentar-te, i dir-me que tens "+any+" anys.<br>Em guardaré el teu correu electrònic ("+cog+") per si mai et vull enviar un missatge.</br><br></br><br>A reveure!</br>");
}
