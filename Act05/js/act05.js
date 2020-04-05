document.write("</br>")
document.write("<h3>Tasca 1</h3>")

var a = 9;
var b = 1;

for (c = 0; b <= 11; c++) {
  document.write(a + " x " +c+ " = " +a*c);
  b++
  document.write("</br>")
}

document.write("</br>")
document.write("<h3>Tasca 2</h3>")

var f = 5;
var h = 1;

for (i = 10; h <= 11; i--) {
    document.write(f+ " x " +i+ " = " +f*i);
    h++
    document.write("</br>")
}

document.write("</br>")
document.write("<h3>Tasca 3</h3>")

var y= 1;
var x =1;

for (z =0; x <= 101; z++) {
  document.write(y + " x " +z+ " = " +y*z);
  x++
  document.write("</br>")

  if (z == 10) {
    document.write("</br>");
    z = 0;
    y++;
  }
}
