function mostrar()
{

	var cont=0;
	var suma=0;
	var num;

	while(cont < 5)
	{
		cont++
		num = prompt("Ingrese numero");
		num = parseInt(num);
		suma = suma + num;
	
	}

	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN