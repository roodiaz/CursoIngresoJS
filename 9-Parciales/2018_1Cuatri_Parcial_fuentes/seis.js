function mostrar()
{

    var hora = document.getElementById("laHora").value;
    hora = parseInt(hora);
    
        switch(hora)
        {
            case 6 :
            case 7 :
            case 8 :
            case 9 :
            case 10 :
            case 11 :
            alert("es de mañana");
            break;

            if(hora >= 19 && hora <= 12)
            {
                alert("es de tarde");
            }

            if(hora)
            
        }
    
        
    
       
}
