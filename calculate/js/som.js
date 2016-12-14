var getal1 = 3;
var getal2 = 7;
var operator = '+';
var uitkomst = 0;

if (operator == '+') {
	uitkomst = getal1 + getal2;
}
if (operator == '-') {
	uitkomst = getal1 - getal2;
}
if (operator == '*') {
	uitkomst = getal1 * getal2;
}
if (operator == '/') {
	uitkomst = getal1 / getal2;
}

document.write('<p>Som: ' + getal1 + operator + getal2 + '</p>');
document.write('<p>uitkomst: ' + uitkomst + '</p>');
