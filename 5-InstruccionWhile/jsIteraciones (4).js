function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	var cont = 0;

	while(numero > 10 || numero < 0)
	{
		cont++;
		numero = prompt("No es un numero valido, intente de nuevo");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN