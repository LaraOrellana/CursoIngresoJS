function mostrar()
{
 	var precioIngresado;
 	var porcentajeDescuento;
 	var precioFinal;

 	precioIngresado = prompt ("Ingrese el precio");
 	porcentajeDescuento = prompt ("Ingrese el descuento");
 
 	precioIngresado = parseFloat (precioIngresado);
 	porcentajeDescuento = parseFloat (precioIngresado);

    precioFinal = precioIngresado * (porcentajeDescuento / 100);


 	precioFinal = document.getElementById ("elPrecioFinal").value = precioFinal;
}
