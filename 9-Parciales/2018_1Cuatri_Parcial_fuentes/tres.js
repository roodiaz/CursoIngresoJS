function mostrar()
{

    var precio
    var porcentaje
    var final

    precio=prompt("Ingresar precio");
    porcentaje=prompt("Ingresar porcentaje");

    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje)/100;


    final=parseInt(precio * porcentaje);
    document.getElementById("elPrecioFinal").value=final;
}
