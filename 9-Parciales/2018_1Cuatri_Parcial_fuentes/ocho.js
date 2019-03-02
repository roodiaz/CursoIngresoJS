function mostrar()
{   
    var cantPos = 0;
    var canNeg = 0;
    var cantPares = 0;
    var cantImpares= 0;
    var cantCeros = 0;
    var sumaNeg = 0;
    var sumaPos = 0;
    var numMin;
    var numMax;
    var letraMin;
    var letraMax;
    var num;
    var letra;
    var bandera = true;
    var respuesta = true;

    while(respuesta)
    {
        //ingreso numero
        num= prompt("Ingresar numero entre -100 y 100");
        num= parseInt(num);

        //valido que no sea una letra
        while(isNaN(num))
        {
            num= prompt("No es un numero. Intentar de nuevo");
            num= parseInt(num);
        }
        //valido que sea un numero entre -100 y 100
        while(num >= -100 || num <=  100)
        {
            num= prompt("No esta entre el -100 y 100. Intentar de nuevo")
            num= parseInt(num);
        }
        
        //ingreso letra
        letra= prompt("Ingresar letra");
        letra= parseInt(letra);

        //valido que sea una letra
        while(letra != isNaN(letra))
        {
            letra= prompt("No es una letra. Intentar de nuevo");
            letra= parseInt(letra);
        }

        //defino max y min
        if(bandera)
        {
            numMax = num;
            numMin = num;
            letraMax = letra;
            letraMin = letra;
            bandera = false;
        }

        //a) cantidad pares
        if (num % 2 == 0)
		{
			cantPares++;
        }
        //b)cantidad impares
        else if(num % 2 != 0)
        {
            cantImpares++;
        }
        //c)cantidad ceros
        else 
        {
            cantCeros++;
        }

        //d)promedio positivos
        promedioPos=sumaPos/cantPos;

        //e)suma negativos
        if(num < 0)
        {
            sumaNeg+= num;
            cantNeg++;
        }

        //f)num y letra max y min
        if (num < numMin)
		{
			numMin = num;
		}	
		if (num > numMax)
		{
			numMax = num;
        }
        if (letra < letraMin)
        {
            letraMin = letra;
        }
        if(num > letraMax)
        {
            letraMax = letra;
        }

        //preguntar si sego ingresando datos
        respuesta = confirm("¿Desea seguir ingrensando datos?");
        
    }

    document.write("La cantidad de numeros pares es "+cantPares+"<br>");
    document.write("La cantidad de numeros impares es "+cantImpares+"<br>");
    document.write("La cantidad de ceros es "+cantCeros+"<br>");
    document.write("El promedio de los numeros positivos es "+promedioPos+"<br>");
    document.write("La suma de los numeros negativos es "+sumaNeg+"<br>");
    document.write("El numero maximo es "+numMax+" y la letra maxima es "+letraMax+"<br>");
    document.write("El numero minimo es "+numMin+" y la letra minima es "+letraMin+"<br>");


}
