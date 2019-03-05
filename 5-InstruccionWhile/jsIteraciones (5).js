function mostrar()
{

    var sexo = prompt("ingrese f ó m .");

    while(sexo != "f" && sexo != "m")
    {
        sexo = prompt("Sexo invalido, ingreselo nuevamente");
    }

    document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN