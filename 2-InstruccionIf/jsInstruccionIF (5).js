function mostrar()
{
//tomo la edad  
    var edad = document.getElementById("edad").value;

    if(edad < 13 || edad > 17)
    {
        alert("No sos adolecente");
    }

}//FIN DE LA FUNCIÓN