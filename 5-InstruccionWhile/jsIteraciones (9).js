function mostrar()
{

	var cont = 0;
	var max = 0;
	var min = 0;
	var bandera = true
	var respuesta = confirm ("agregar numeros?");

	while(respuesta)
	{
		cont++
		num = prompt("Ingresar numero");
		num = parseInt(num);

		while(isNaN(num))
		{
			alert("no se ingreso un numero");
			num = prompt("Ingresar numero");
			num = parseInt(num);
		}

		if(bandera)
		{
			max = num;
			min = num;
			bandera = false
		}

		if(num > max)
		{
			max = num;
		}
		if(num < min)
		{
			min = num;
		}

		respuesta = confirm ("agregar numeros?");
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;


}//FIN DE LA FUNCIÓN