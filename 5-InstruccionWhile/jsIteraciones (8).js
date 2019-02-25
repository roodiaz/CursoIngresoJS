function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
  var respuesta=confirm("Agregar numeros?");
  var numero;

  while(respuesta) 
  {
    numero = prompt ( " ingrese un numero " );
    numero = parseInt (numero);

    if (numero >=  0 ) 
    {
      positivo+= numero;
      contador++;
    } else  {
      negativo*= numero;
    }

    respuesta = confirm ("Desea seguir agregando numeros?");

  }

  document.getElementById ("suma").value = positivo;
  document.getElementById ("producto").value= negativo;
  


}//FIN DE LA FUNCIÓN
