function mostrar()
{
  var dia = prompt("Ingresar dia de semana");
  
    switch(dia)
    {
        
       case "lunes":
       case "martes":
       case "miercoles":
       case "jueves":
       case "viernes":
  
       alert("buen finde");
       break;
  
       case "sabado":
       case "domingo":
  
       alert("buen finde")
  
       default:
  
       alert("no es un dia valido, intentar de nuevo");
    }

}
