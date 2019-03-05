function mostrar()
{
    var nota;
    var sexo;
    var cont = 0;
    var sumaNotas = 0;
    var bandera = true;
    var notaBaja;
    var sexoNotaBaja;
    var mConNotaAlta = 0;

    while(cont < 5)
    {
        cont++;
        //pido ingreso de numero
        nota = prompt("Ingresar nota del 1 al 10");
        nota = parseInt(nota);

        //valido que sea un numero
        while(isNaN(nota))
        {
            alert("error, no es un numero valido");
            nota = prompt("Ingresar nota del 1 al 10");
            nota = parseInt(nota);
        }

        //valido que sea numero del 1 al 10
        while(nota > 10 || nota < 1)
        {
            alert("error, no es un numero del 1 al 10");
            nota = prompt("Ingresar nota del 1 al 10");
            nota = parseInt(nota);
        }

        //pedir sexo de alumno
        sexo = prompt("Ingresar sexo: f o m");

        //valido sexo
        while(sexo != "f" && sexo != "m")
        {
            alert("error, no es un sexo valido");
            sexo = prompt("Ingresar sexo: f o m");
        }

        //promedio notas totales
        sumaNotas = sumaNotas + nota;
        promedioTotal = sumaNotas / cont;

        //defino nota y sexo mas bajo
        if(bandera)
        {
            notaBaja = nota;
            bandera = false;
        }
        if(notaBaja > nota)
        {
            notaBaja = nota;
            sexoNotaBaja = sexo;
        }
        
        if(sexo == "m" && nota >= 6)
        {
            mConNotaAlta++;
        }

    }

    document.write("El promedio total de las notas es de: "+promedioTotal+"<br>");
    document.write("La nota mas baja es "+notaBaja+" y el sexo es "+sexoNotaBaja+ "<br>");
    document.write("La cantidad de varones con nota mayor o igual a 6 son: "+mConNotaAlta+"<br>");
}



