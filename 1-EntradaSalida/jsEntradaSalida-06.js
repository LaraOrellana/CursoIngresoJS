/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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




/*
Entradas; 2 numeros
procesos realizar la suma 2 numeros
salidas la suma de 2 nmeros


ENTRADAS
prompt
document.getElementById (...).value o id.value
x=id.value

PROCESOS
	+; -; *; /; 

SALIDAS
	alert
	console.log
	document.write
	document.getElementById
	id.value = x
*/