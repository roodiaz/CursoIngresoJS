function mostrar()
{
	sumaPositivos = 0;
	sumaNegativos = 0;
	Positivos = 0;
	Negativos = 0;
	contPares = 0;
	var cont = 0;
	var respuesta = confirm("Desea ingresar numeros?");

	while(respuesta)
	{
		cont++;
		num = prompt ("Ingresar numero");
		num = parseInt(num);

		while(isNaN(num))
		{
			alert("no se ingreso un numero");
			num = prompt ("Ingresar numero");
			num = parseInt(num);
		}

		if(num > 0)
		{
			sumaPositivos = sumaPositivos + num;
		}
		respuesta = confirm("Desea ingresar numeros?");
		if(num < 0)
		{
			sumaNegativos = sumaNegativos + num;
		}
		if(num > 0)
		{
			Positivos++;
		}
		if(num < 0)
		{
			Negativos++;
		}
		if(num % 2 == 0)
		{
			contPares++;
		}
	}

	promedioPos = sumaPositivos / Positivos;
	promedioNeg = sumaNegativos / Negativos;
	diferencia = sumaPositivos - sumaNegativos;

	document.write("La suma de los positivos es " + sumaPositivos + "</br>");
	document.write("La suma de los negativos es " + sumaNegativos + "</br>");
	document.write("La cantidad de positivos es " + Positivos + "</br>");
	document.write("La cantidad de negativos es " + Negativos + "</br>");
	document.write("La cantidad de pares es " + contPares + "</br>");
	document.write("La promedio de positivos es " + promedioPos + "</br>");
	document.write("La promedio de negativos es " + promedioNeg + "</br>");
	document.write("La diferencia entre positivos y negativos es " + diferencia + "</br>");
}//FIN DE LA FUNCIÓN