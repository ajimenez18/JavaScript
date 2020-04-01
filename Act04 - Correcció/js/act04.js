document.write("<br/>");
var primera = 10;
var segona = 20;
var tercera = 30;
var quarta = 40;

if (primera >= segona && primera >= tercera && primera >= quarta) {
  document.write("Tasca 1: La mes gran es--> ");
  document.write(primera);
}
else if (segona >= primera && segona >= tercera && segona >= quarta) {
  document.write("Tasca 1: La mes gran es--> ");
  document.write(segona);
}

else if (tercera >= primera && tercera >= segona && tercera >= quarta) {
  document.write("Tasca 1: La mes gran es--> ");
  document.write(tercera);
}

else {
  document.write("Tasca 1: La mes gran es--> ");
  document.write(quarta);
}

document.write("<br/><br/><br/>");
var a = 30;
var b = 20;
var c = 10;
var d = 40;

if (a <= b && a <= c && a <= d) {
  document.write("Tasca 2: El mes petit es--> ");
  document.write(a);
}
else if (b <= a && b <= c && b <= d) {
  document.write("Tasca 2: El mes petit es--> ");
  document.write(b);
}

else if (c <= a && c <= b && c <= d) {
  document.write("Tasca 2: El mes petit es--> ");
  document.write(c);
}

else {
  document.write("Tasca 2: El mes gran es--> ");
  document.write(d);
}

document.write("<br/><br/><br/>");
var una = 10;
var dos = 20;
var tres = 30;
var cuatro = 40;

if (una !== dos && dos !== tres && tres !== cuatro) {
  document.write("Tasca 3: No son iguals")
}
