function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById("mes").value;


switch(mesDelAño)
{
    case"Agosto":
    case"Julio":
        alert("Abrigate que hace frio");
    break;

    case"Enero":
    case"Febero":
    case"Marzo":
    case"Abril":
    case"Junio":
        alert("Falta para el invierno");
    break;

    default:
        alert("Ya pasamos el frio, ahora calor!!!");
}





}//FIN DE LA FUNCIÓN