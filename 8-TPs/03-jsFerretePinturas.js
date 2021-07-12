/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{


	var temperaturaIngresada;
	var Centigrados;
	var resultado;

	temperaturaIngresada = document.getElementById (txtIdTemperatura).value;
	temperaturaIngresada = parseFloat (temperaturaIngresada);
	resultado = parseFloat (resultado);
	Centigrados = parseFloat (Centigrados);


	resultado = ( temperaturaIngresada - 32);
	Centigrados = resultado * 5/9;
	
	alert ( temperaturaIngresada + " Fahrenheit son " + Centigrados + " centrigrados ") 





}

function CentigradosFahrenheit () 
{
	
}
