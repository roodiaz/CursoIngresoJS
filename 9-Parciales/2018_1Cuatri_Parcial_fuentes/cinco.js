function mostrar()
{
  var planeta
  
      planeta = prompt("Ingrese el nombre de un planeta");
  
  
      switch (planeta) 
      {
          case 'mercurio':
          case 'venus':

            alert('Aca hace mas calor');
            break;
          
          case 'tierra':

            alert('Aca vivimos');
            break;
  
          case 'marte':
          case 'jupiter':
          case 'saturno':
          case 'urano':
          case 'neptuno':
          
            alert('Aca hace mas frio');
            break;
            
          default:
          
            alert("No es un planeta valido");
  
      }      
}
