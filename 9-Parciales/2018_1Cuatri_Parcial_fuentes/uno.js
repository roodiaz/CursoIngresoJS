
function mostrar()
{

    var ancho
    var largo
    var perimetro1

    ancho=prompt("Ingresar ancho");
    largo=prompt("Ingresar largo");

    ancho=parseInt(ancho);
    largo=parseInt(largo);

    perimetro1=parseInt(ancho + largo)*2;
    alert(perimetro1);

}
