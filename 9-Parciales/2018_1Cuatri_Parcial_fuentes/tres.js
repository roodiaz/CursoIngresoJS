function mostrar()
{

    var precio = prompt("Ingrese precio");
    var porcentaje = prompt("Ingrese porcentaje");

    precio = parseInt(precio);
    porcentaje = parseInt(porcentaje);

    preciofinal = precio - precio * porcentaje / 100;

    document.getElementById("elPrecioFinal").value = preciofinal;

}
