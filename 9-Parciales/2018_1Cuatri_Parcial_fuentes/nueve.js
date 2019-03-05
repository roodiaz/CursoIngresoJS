function mostrar()
{
    var marca;
    var peso;
    var temp;
    var cont = 0;
    var respuesta = confirm("Ingresar datos?");
    var tempPar = 0;
    var bandera = true;
    var marcaMax;
    var pesoMax;
    var pesoMin;
    var contProductos = 0;
    var sumaPeso = 0;


    while(respuesta)
    {
        cont++;
        //ingreso marca
        marca = prompt("Ingrese marca del producto");
        //valido sea un texto
        while(!isNaN(marca))
        {
            alert("error, no es una marca valida");
            marca = prompt("Ingrese marca del producto");
        }

        //ingreso peso
        peso = prompt("Ingresa peso del producto entre 1 y 100");
        peso = parseInt(peso);
        //valido que sea un numero
        while(isNaN(peso))
        {
            alert("error, no es un numero");
            peso = prompt("Ingresa peso del producto entre 1 y 100");
            peso = parseInt(peso);
        }
        //valido que sea entre 1 y 100
        while(peso < 1 || peso > 100)
        {
            alert("error, no es un numero valido");
            peso = prompt("Ingresa peso del producto entre 1 y 100");
            peso = parseInt(peso);
        }

        //ingreso temperatura
        temp = prompt("Ingresar temperatura entre -30 y 30");
        temp = parseInt(temp);
        //valido que sea un numero
        while(isNaN(temp))
        {
            alert("error, no es un numero");
            temp = prompt("Ingresar temperatura entre -30 y 30");
            temp = parseInt(temp);
        }
        //valido que sea entre -30 y 30
        while(temp < -30 || temp > 30)
        {
            alert("error, no es un numero valido");
            temp = prompt("Ingresar temperatura entre -30 y 30");
            temp = parseInt(temp);
        }

        //cantidad temperatura par
        if(temp % 2 == 0)
        {
            tempPar++;
        }

        //defino marca y peso maximo/minimo
        if(bandera)
        {
            pesoMax = peso;
            pesoMin = peso;
            marcaMax = marca;
            bandera = false;
        }
        if(pesoMax < peso)
        {
            pesoMax = peso;
            marcaMax = marca;
        }

        //cantidad de productos en menos de 0 grados
        if(temp < 0)
        {
            contProductos++;
        }

        //promedio peso total de productos
        sumaPeso = sumaPeso + peso
        promedioPeso = sumaPeso / cont;

        respuesta = confirm("Ingresar datos?");
    }

    document.write("La cantidad de temperatura par es: "+tempPar+"<br>");
    document.write("La marca del producto mas pesado es: "+marcaMax+"<br>");
    document.write("La cantidad de productos que se conservan a menos de 0 grados son: "+contProductos+"<br>");
    document.write("El promedio de peso de todos los productos es: "+promedioPeso+"<br>");
    document.write("El peso maximo es: "+pesoMax+" y el peso minimo es: "+pesoMin);
}
