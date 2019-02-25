function mostrar()
{

  var acumulador=0;
  var contador=0;
  var respuesta = confirm("Desea agregar numeros?")
  var numeros;

  while(respuesta)
  {
    contador++
    numeros = prompt("Ingrese numero");
    numeros = parseInt(numeros);
    
    respuesta=confirm("Desea seguir agreando numeros?");
    
    acumulador+=numeros;
    
    
  } while(isNaN(numeros));

  documento . getElementById ("suma"). valor = acumulador;
  documento . getElementById ("promedio"). valor  = acumulador / contador;

}//FIN DE LA FUNCIÓN
