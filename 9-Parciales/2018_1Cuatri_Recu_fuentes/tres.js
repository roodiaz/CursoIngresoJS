function mostrar()
{

    var precio
    var porcentaje
    var descuento
    var preciofinal

    precio=prompt("Ingrese precio");
    porcentaje=prompt("Ingrese porcentaje");

    precio=parseInt(precio);
    porcentaje=parseInt(porcentaje);

    descuento=(precio*porcentaje)/100;
    preciofinal=(precio-descuento);

    document.getElementById("elPrecioFinal").value=preciofinal;
}
