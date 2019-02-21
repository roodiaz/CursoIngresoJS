function mostrar()
{

var clave = prompt("Ingrese el número clave.");
var cont = 0

while(clave != "utn750" && cont < 2 )
{
    cont++
    clave = prompt("Ingrese clave nuevamente");

    if(cont == 2) 
    {
    alert("Superaste los 3 intentos");
    }
}

}//FIN DE LA FUNCIÓN
