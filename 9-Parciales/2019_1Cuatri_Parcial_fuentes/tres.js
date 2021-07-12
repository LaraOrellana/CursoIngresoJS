function mostrar()
{
	var precio;
	var porcentaje; 
	var total;

	precio = prompt ("Ingrese el precio");
	precio = parseInt (precio);
	porcentaje = prompt ("ingrese el descuento");
	pocentaje = parseInt (porcentaje);
	total = precio * (porcentaje / 100);

	total = document.getElementById("elPrecioFinal").value = total;

}
