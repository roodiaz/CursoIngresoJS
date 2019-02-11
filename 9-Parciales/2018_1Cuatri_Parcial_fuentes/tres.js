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


    descuento=parseInt(precio * porcentaje)/100;
    final=parseInt(precio - descuento);
    
    document.getElementById("elPrecioFinal").value=final;
}
