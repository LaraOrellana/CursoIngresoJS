/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetro;
	var total;

	largoTerreno = document.getElementById ("txtIdLargo").value;
	anchoTerreno = document.getElementById ("txtIdAncho").value;

	largoTerreno = parseFloat (largoTerreno);
	anchoTerreno = parseFloat (anchoTerreno);

	perimetro = (largoTerreno * 2) + (anchoTerreno * 2);
	total - perimetro * 3;

	alert (" Se necesitan " + total + " metro de alambre para curbir el terreno con tres hilos de alambre.");

}		
function Circulo () 
{
	var radioTerreno;
	var perimetroCircular;
	var circuloAlambre;

	radioTerreno = (2 * Math.PI * radioTerreno);
	perimetroCircular = parseFloat (perimetroCircular);

	circuloAlambre = perimetroCircular * 3;
	circuloAlambre = parseFloat (circuloAlambre);
	alert ("la cantida de alambre que se necesita es: " + circuloAlambre);
}
function Materiales () 
{
	var largoTerreno
	var anchoTerreno
	  
}