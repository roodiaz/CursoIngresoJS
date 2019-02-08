/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    var dato1
     dato1=document.getElementById("elNombre").value;

    var dato2
    dato2=document.getElementById("laEdad").value;

    alert("Usted se llama "+dato1 +" y tiene " + dato2);



	
}

