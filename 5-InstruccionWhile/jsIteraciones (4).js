function mostrar()
{
  cont = 0;
	var num = prompt("ingrese un número entre 0 y 9.");

  while(num < 0 || num > 9 )
  {
    cont++;
    num = prompt ("Numero equivocado, ingresar nuevamente");
	}

   document.getElementById("Numero").value=num;
}//FIN DE LA FUNCIÓN
