/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	var num1
    num1=document.getElementById("numeroUno").value;

    var num2
    num2=document.getElementById("numeroDos").value;

    resulado=parseInt(num1) + parseInt(num2);
    alert(resulado);
	
}

function restar()
{
	var num1
    num1=document.getElementById("numeroUno").value;

    var num2
    num2=document.getElementById("numeroDos").value;

    resulado=parseInt(num1) - parseInt(num2);
    alert(resulado);

    
}

function multiplicar()
{ 
	var num1
    num1=document.getElementById("numeroUno").value;

    var num2
    num2=document.getElementById("numeroDos").value;

    resulado=parseInt(num1) * parseInt(num2);
    alert(resulado);
}

function dividir()
{
	var num1
    num1=document.getElementById("numeroUno").value;

    var num2
    num2=document.getElementById("numeroDos").value;

    resulado=parseInt(num1) / parseInt(num2);
    alert(resulado);
}

