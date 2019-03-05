function mostrar()
{
    var respuesta = confirm("Desea ingresar datos?");
    var num;
    var letra;
    var cont = 0;
    var numPares = 0;
    var numImpares = 0;
    var ceros = 0;
    var sumaPositivos = 0;
    var sumaNegativos = 0;
    var bandera = true;
    var numMax;
    var numMin;
    var letraMax;
    var letraMin;

    while(respuesta)
    {
        cont++;
        //ingreso numero entre 100 y -100
        num = prompt("Ingresa numero entre 100 y -100");
        num = parseInt(num);

        //valido que sea un numero
        while(isNaN(num))
        {
            alert("error, no es un numero valido");
            num = prompt("Ingresa numero entre 100 y -100");
            num = parseInt(num);
        }

        //valido que sea entre 100 y -100
        while(num < -100 || num > 100)
        {
            alert("error, no es un numero entre 100 y -100");
            num = prompt("Ingresa numero entre 100 y -100");
            num = parseInt(num);
        }

        //ingreso letra
        letra = prompt("Ingresa letra de la A a la Z");

        //valido que sea una letra
        while(!isNaN(letra))
        {
            alert("error, no es una letra");
            letra = prompt("Ingresa letra de la A a la Z");
        }

        //defino cantidad numeros pares
        if(num % 2 == 0)
        {
            numPares++;
        }

        //defino cantidad numero impares
        if(num % 2 != 0)
        {
            numImpares++;
        }

        //defino cantidad de ceros
        if(num == 0)
        {
            ceros++;
        }

        //promedio positivos
        if(num > 0)
        {
            sumaPositivos = sumaPositivos + num;
            promedioPositivos = sumaPositivos / cont;
        }

        //suma de negativos
        if(num < 0)
        {
            sumaNegativos = sumaNegativos + num;
        }

        //defino numero y letra maxima
        if(bandera)
        {
            numMax = num;
            numMin = num;
            letraMax = letra;
            letraMin = letra;
            bandera = false;
        }
        if(numMax < num)
        {
            numMax = num;
            letraMax = letra;
        }
        if(numMin > num)
        {
            numMin = num;
            letraMin = letra;
        }

        respuesta = confirm("Desea ingresar datos?");
    }

    document.write("La cantidad de numeros pares es "+numPares+"<br>");
    document.write("La cantidad de numeros impares es "+numImpares+"<br>");
    document.write("La cantidad de ceros es "+ceros+"<br>");
    document.write("El promedio de positivos es "+promedioPositivos+"<br>");
    document.write("La suma de negativos es "+sumaNegativos+"<br>");
    document.write("El numero maximo es "+numMax+" y su letra es "+letraMax+"<br>");
    document.write("El numero minimo es "+numMin+" y su letra es "+letraMin+"<br>");

}
