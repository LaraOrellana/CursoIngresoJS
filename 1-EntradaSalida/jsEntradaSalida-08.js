/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1;
	var num2;
	var division;
	var resto; 

	num1 = txtIdNumeroDividendo.value;
	num2 = txtIdNumeroDivisor.value;

	num1 = parseFloat (num1);
	num2 = parseFloat(num2);


	resto = num1 % num2;
	division = num1 / num2;

	alert("el resultado de la divsion es: " + division + " y el resto es: " + resto);

}

