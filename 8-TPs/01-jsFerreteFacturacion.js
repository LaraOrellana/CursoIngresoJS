/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precio1;
	var precio2;
	var precio3; 
	var total;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat (precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat (precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat (precio3);

	total = (precio1 + precio2 + precio3);

	alert ("El resultado es " + total);
}
function Promedio () 
{
	var precio1;
	var precio2;
	var precio3; 
	var total;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat (precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat (precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat (precio3);

	total = (precio1 + precio2 + precio3) / 3;

	alert ("El promedio es " + total);
}
function PrecioFinal () 
{
	var precio1;
	var precio2;
	var precio3; 
	var total;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio1 = parseFloat (precio1);

	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio2 = parseFloat (precio2);

	precio3 = document.getElementById("txtIdPrecioTres").value;
	precio3 = parseFloat (precio3);

	total = (precio1 + precio2 + precio3) * 0.21;

	alert ("El resultado es " + total) 
}