function mostrar()
{
//tomo la edad  
    var edad
    edad=document.getElementById("edad").value;
    parseInt(edad);

    if(edad>=18) {
        
        alert("Mayor de edad")
    } 


    if(edad>=13 && edad<=17) {
        
        alert("Sos adolecente")
    } 

    else {

        alert("menor de 13 años")
    }
        




}//FIN DE LA FUNCIÓN