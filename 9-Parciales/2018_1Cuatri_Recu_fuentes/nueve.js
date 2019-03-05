function mostrar()
{
    var nombre;
    var peso;
    var temp;
    var cont = 0;
    var respuesta = confirm("ingresar datos?");
    var tempPar = 0;
    var bandera = true;
    var pesoMax;
    var tempMax;
    var nombreMax;
    var tempMenor0 = 0;
    var sumaPeso = 0;
    var pesoMin;

    while(respuesta)
    {
        cont++;
        //ingreso animal
        nombre = prompt("ingresar nombre de animal");
        //valido que sea un nombre
        while(!isNaN(nombre))
        {
            alert("no es un nombre valido")
            nombre = prompt("ingresar nombre de animal");
        }

        //ingreso peso entre 1 y 1000
        peso = prompt("ingresar peso del del animal entre 1 y 1000kg");
        peso = parseInt(peso);
        //valido que sea un numero
        while(isNaN(peso))
        {
            alert("no es un peso valido");
            peso = prompt("ingresar peso del del animal entre 1 y 1000kg");
            peso = parseInt(peso);
        }
        //valido que sea entre 1 y 1000
        while(peso < 1 || peso > 1000)
        {
            alert("no es un peso entre 1 y 1000");
            peso = prompt("ingresar peso del del animal entre 1 y 1000kg");
            peso = parseInt(peso);
        }

        //ingreso temperatura
        temp = prompt("ingresar temperatura del habitat entre 30 y -30");
        temp = parseInt(temp);
        // valido que sea un numero
        while(isNaN(temp))
        {
            alert("no es un numero");
            temp = prompt("ingresar temperatura del habitat entre 30 y -30");
            temp = parseInt(temp);
        }
        //valido que sea entre 30 y -30
        while(temp > 30 || temp < -30)
        {
            alert("no es un temperatura valida");
            temp = prompt("ingresar temperatura del habitat entre 30 y -30");
            temp = parseInt(temp);
        }

        //defino temperaturas pares
        if(temp % 2 == 0)
        {
            tempPar++;
        }

        //defino nombre y temperatura de animal mas pesado
        if(bandera)
        {
            pesoMax = peso;
            nombreMax = nombre;
            tempMax = temp;
            pesoMin = peso;
            bandera = false;
        }
        if(pesoMax < peso)
        {
            pesoMax = peso;
            nombreMax = nombre
            tempMax = tempMax;
        }

        //defino cantidad de animales que viven a menos 0
        if(temp < 0)
        {
            tempMenor0++;
        }

        //defino promedio peso de todos los animales
        sumaPeso = sumaPeso + peso;
        promedioPeso = sumaPeso/cont++;

        //peso maximo y minimo de animales bajo 0
        if(temp < 0)
        {
            pesoMax = peso;
            pesoMin = peso;
        }




        respuesta = confirm("ingresar datos?");
    }
    
    document.write("la cantidad de temperaturas pares es: "+tempPar+"<br>");
    document.write("El animal mas pesado es "+nombreMax+" y su temperatura es de "+tempMax+"<br>");
    document.write("la cantidad de animales que viven a -0 grados es: "+tempMenor0+"<br>");
    document.write("el promedio del peso de todos los animales es de "+promedioPeso+"<br>");
    document.write("el peso maximo de animales que viven bajo 0 es: "+pesoMax+" y el minimo es "+pesoMin+"<br>");
}


