function mostrar()
{

	var num = prompt("ingrese un número entre 0 y 9.");
	
	

	while (num > 0  && num < 9 ) {

		num =  prompt ( " Numero equivocado " );

		consola . log (cont ++ );

	}

	if (num >  10 ) {

		alerta ( " No es un numero del 0 al 9 " );
	}
}//FIN DE LA FUNCIÓN