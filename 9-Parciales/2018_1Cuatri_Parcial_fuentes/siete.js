function mostrar()
{
    var nota;
    var sexo;
    var sumaNotas = 0;
    var i=0;
    var notaMasBaja = 10;
    var sexoDeNotaMasBaja;
    var varonesConNotaMayorASeis = 0;

    while(i < 5)
    {
    nota = prompt("Ingrese nota obtenida entre 0 y 10");
    nota = parseInt(nota);
        
        //valido que no sea una letra
        while(isNaN(nota)){
            nota = prompt("Ingrese una nota numerica");
            nota = parseInt(nota);
        }

        //valido que sea un numero entre 0 y 10
        while(nota < 0 || nota > 10){
            nota = prompt("Ingrese una nota entre 0 y 10");
            nota = parseInt(nota);  
        }

    sexo = prompt("Ingrese el sexo del alumno(F o M)");

        //valido que sea F o M
        while(sexo !="f" && sexo !="m"){
            sexo = prompt("Ingrese F o M");
        }
        
        //sumo notas para obtener promedio
        sumaNotas = sumaNotas + nota;

        //guardo nota mas baja
        if(notaMasBaja > nota){
            notaMasBaja = nota;
            sexoDeNotaMasBaja = sexo;
        }

        //calculo cant de M con nota mayor o igual a 6
        if(sexo == "m" && nota >= 6){
            varonesConNotaMayorASeis++;
        }

    i++;
    }

    //alert("El promedio de las notas es: " + sumaNotas / i);
    //alert("La nota mas baja es: " + notaMasBaja + " y su sexo es: " + sexoDeNotaMasBaja);
    //alert("Cantidad de varones con nota mayor o igual a 6: " + varonesConNotaMayorASeis);

    alert("El promedio de las notas es: " + sumaNotas / i +
    "\nLa nota mas baja es: " + notaMasBaja + " y su sexo es: " + sexoDeNotaMasBaja +
    "\nCantidad de varones con nota mayor o igual a 6: " + varonesConNotaMayorASeis);
}
