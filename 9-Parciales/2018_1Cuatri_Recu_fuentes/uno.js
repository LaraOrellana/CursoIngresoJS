
function mostrar()
{
	var anchoRectangulo;
	var largoRectangulo;
	var perimetro ;

	anchoRectangulo = prompt ("Ingrese el ancho del rectangulo");
	largoRectangulo = prompt ("Ingrese el largo del rectangulo");

	anchoRectangulo = parseInt (anchoRectangulo);
	largoRectangulo = parseInt (largoRectangulo);
	perimetro = parseInt (perimetro);

	perimetro = ( anchoRectangulo * 2 ) + ( largoRectangulo * 2);

	alert (" El perimetro de su rectangulo es: " + perimetro);


}
