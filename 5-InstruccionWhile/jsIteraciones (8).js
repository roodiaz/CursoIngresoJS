function mostrar()
{

	var cont=0;
	var pos=0;
	var neg=1;
	var respuesta = confirm ("Ingresar numeros?");

	while(respuesta)
	{
		cont++
		num = prompt("Ingrese numero.");
		num = parseInt (num);

		while(isNaN(num))
		{
			alert("No es un numero");
			num = prompt("Ingrese numero.");
			num = parseInt (num);
		}

		respuesta = confirm ("Ingresar numeros?");

		if(num > 0)
		{
			pos = pos + num;
		}
		else if(num < 0)
		{
			neg = neg * num;
		}
	}
	
	

	document.getElementById('suma').value=pos;
	document.getElementById('producto').value=neg;

}//FIN DE LA FUNCIÓN