function mostrar()
{

  var acumulador = 0;
  var contador = 0;
  var respuesta = confirm("Agregar numero?");
  var num;

  while(respuesta)
  {
    num = prompt("Ingrese numero");
    num = parseInt(num);

    if(isNaN(num) == false){
      
      contador++;
      respuesta = confirm("Agregar mas numeros?");
      acumulador+=num;

    } else {

      alert("Error, no es un numero. Intente de nuevo");

    }
    
  } 

  document.getElementById ("suma").value = acumulador;
  document.getElementById ("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN
