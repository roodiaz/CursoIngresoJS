function mostrar()
{
  var num
	var contador=0;
	var positivo=0;
	var negativo=1;
  var max;
  var min;
  var bandera= true;
  var respuesta= confirm("Agregar numeros?");

  do
  {
    contador++
    num = prompt("Ingrese numero");
    num = parseInt(num);
    
    respuesta = confirm("Agregar mas numeros?");

  } while(respuesta);

  
  
  document.getElementById("suma").value= suma;
  document.getElementById("producto").value= producto;

}//FIN DE LA FUNCIÓN
