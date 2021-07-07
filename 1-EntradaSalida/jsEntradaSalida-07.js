/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

	var numero1;
	var numero2;
	var suma;


	numero1=txtIdNumeroUno.value;
	numero2=txtIdNumeroDos.value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	suma = numero1 + numero2;

	alert("la suma de los numeros es: " + suma);
}

function restar()
{
	var numero1;
	var numero2;
	var suma;


	numero1=txtIdNumeroUno.value;
	numero2=txtIdNumeroDos.value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	resta = numero1 - numero2;

	alert("la resta de los numeros es: " + resta);
}


function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicacion;


	numero1=txtIdNumeroUno.value;
	numero2=txtIdNumeroDos.value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	multiplicacion = numero1 * numero2;

	alert("la multiplicacion de los numeros es: " + multiplicacion);
}

function dividir()
{
	var numero1;
	var numero2;
	var division;


	numero1=txtIdNumeroUno.value;
	numero2=txtIdNumeroDos.value;

	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);

	division = numero1 / numero2;

	alert("la division de los numeros es: " + division);
}




