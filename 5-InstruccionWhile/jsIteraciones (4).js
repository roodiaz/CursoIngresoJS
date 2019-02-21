function mostrar()
{

	var num = prompt("ingrese un número entre 0 y 9.");
	
	

	while(num)
	{
		if(num>=0 && num<=9){

			document.getElementById("Numero").value=num;
		}
	break;
	}
}//FIN DE LA FUNCIÓN