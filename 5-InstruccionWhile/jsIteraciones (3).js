function mostrar()
{

var clave = prompt("Ingrese el número clave.");
var cont = 1

while(clave != "utn750" && cont < 3 )
{
    
    clave = prompt("Ingrese clave nuevamente");
    cont++;

    if(cont == 3) 
    {
    alert("Superaste los 3 intentos");
    }
}

}//FIN DE LA FUNCIÓN
