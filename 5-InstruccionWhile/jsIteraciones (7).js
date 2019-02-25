function mostrar()
{

  var acumulador = 0;
  var contador = 0;
  var respuesta = confirm("Agregar numero?");
  var num;

  while(respuesta)
  {
    contador++
    num = prompt("Ingrese numero");
    num = parseInt(num);
    
    respuesta = confirm("Agregar mas numeros?");
    acumulador+=num;
  }

  document.getElementById ("suma").value = acumulador;
  document.getElementById ("promedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN
