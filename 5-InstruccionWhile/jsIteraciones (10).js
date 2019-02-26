function mostrar()
{

    var numero;
	var sumaPositivos =0 ;
	var sumaNegativos = 0;
	var promedioPositivos = 0
	var promedioNegativos = 0;
	var diferenciaPyN = 0;
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var respuesta = confirm();
	
    
	while (respuesta)
	{
		numero = prompt("Ingrese un numero:");
        numero = parseInt(numero);
        
		if (numero < 0)
		{
			sumaNegativos+= numero;
			contadorNegativos++;
		}
		else if (numero > 0)
		{
			sumaPositivos+= numero;
			contadorPositivos++;
		}
		else 
		{
			contadorCeros++;
		}
		if (numero % 2 == 0 && numero != 0)
		{
			contadorPares++;
		}
		respuesta = confirm("Agregar mas numeros?");
    }
    
	promedioNegativos = sumaNegativos/contadorNegativos;
    promedioPositivos = sumaPositivos/contadorPositivos;
    diferenciaPyN = sumaPositivos - sumaNegativos;
    
	document.write("La suma de negativos es: "+sumaNegativos+"<br>");
	document.write("La suma de positivos es: "+sumaPositivos+"<br>");
	document.write("La cantidad de positivos es: "+contadorPositivos+"<br>");
	document.write("La cantidad de negativos es: "+contadorNegativos+"<br>");
	document.write("La cantidad de ceros es: "+contadorCeros+"<br>");
	document.write("La cantidad de pares es: "+contadorPares+"<br>");
	document.write("El promedio de negativos es :"+promedioNegativos+"<br>");
	document.write("El promedio de los positivos es: "+promedioPositivos+"<br>");
	document.write("La diferencia entre positivos y negativos es: "+diferenciaPyN+"<br>");







}//FIN DE LA FUNCIÓN
