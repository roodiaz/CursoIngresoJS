function mostrar()
{

	var cont=0;
	var suma=0;
	var respuesta = confirm("Ingresar numero?")
	

	while(respuesta)
	{
		cont++;
		num = prompt("Ingrese numero");
		num = parseInt (num)

		while(isNaN(num))
		{
			alert("Eso no es un numero");
			num = prompt("Ingrese numero")
			num = parseInt(num);
		}
		
		respuesta = confirm("Ingresar numero?");
	}
		suma = suma + num;


	document.getElementById('suma').value=suma;
	document.getElementById('promedio').value=suma/cont;

}//FIN DE LA FUNCIÓN