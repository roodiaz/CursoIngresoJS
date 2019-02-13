function mostrar()
{

    var precio
    var porcentaje
    var descuento
    var final

    precio=prompt("Ingresar precio");
    porcentaje=prompt("Ingresar porcentaje");

    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);


    descuento=(precio * porcentaje)/100;
    final=(precio - descuento);
    
    document.getElementById("elPrecioFinal").value=final;
}
