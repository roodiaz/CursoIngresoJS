function mostrar()
{

	var bandera = true;
	var respuesta = confirm("Desea ingresar numeros?");
	var minimo;
	var maximo;
	var numero;

	while (respuesta)
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);

		if (bandera)
		{
			maximo = numero;
			minimo = numero;
			bandera = false;
		}
		if (numero < minimo)
		{
			minimo = numero;
		}	
		if (numero > maximo)
		{
			maximo = numero;
		}

	    respuesta = confirm("¿Quiere seguir ingresando numeros?");
	}
	
	document.getElementById('minimo').value = minimo;
	document.getElementById('maximo').value = maximo;




}//FIN DE LA FUNCIÓN