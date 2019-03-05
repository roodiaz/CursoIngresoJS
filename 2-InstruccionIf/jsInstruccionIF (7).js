function mostrar()
{
//tomo la edad  
    var estado = document.getElementById("estadoCivil").value;
    var edad = document.getElementById("edad").value;

    if(edad < 18 && estado != "Soltero")
    {
        alert("Eres muy pequeño para NO ser soltero.");
    }

	


}//FIN DE LA FUNCIÓN