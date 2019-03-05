function mostrar()
{
    var planeta = prompt("Ingresar planeta del sistema solar");
    

    switch(planeta)
    {
        case "tierra":
            alert("Aca vivimos");
        break;

        case "venus":
        case "mercurio":
            alert("Aca hace mas calor");
        break;

        case "marte":
        case "neptuno":
        case "saturno":
        case "jupiter":
        case "urano":
            alert("Aca hace mas frio");
        break;

        default:
            alert("Ese planeta no es valido");
    }


}
