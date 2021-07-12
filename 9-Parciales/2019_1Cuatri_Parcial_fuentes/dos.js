function mostrar()
{
  var nombre1;
  var nombre2;
  var peso1; 
  var peso2; 

  nombre2 = prompt ("¿Cual es su nombre?");
  nombre1 = prompt ("¿Como se llama su pareja?");
  peso1 = prompt ("¿Cual es su peso?");
  peso2 = prompt ("¿Cual es el peso de pareja?")
 


  peso1 = parseInt (peso1);
  peso2 = parseInt (peso2);

  pesoSumado = peso1 + peso2;
  pesoPromedio = pesoSumado / 2

  alert("Ustedes se llaman "+ nombre1 + " y " + nombre2 + " , pesan " + peso1 + " y " + peso2 + " kilos, que sumados son " + pesoSumado + " y el promedio es de " + pesoPromedio);

}
