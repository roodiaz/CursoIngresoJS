function mostrar()
{
    //tomo el mes  
    var mes = document.getElementById('mes').value;

    switch(mes)
    {
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio");
        break;

        case "Enero":
        case "Febrero":
        case "Marzo":
        case "Abril":
        case "Mayo":
        case "Junio":
            alert("Falta poco para el invierno");
        break;

        default:
            alert("Ya pasamos invierno");
    }

}//FIN DE LA FUNCIÓN