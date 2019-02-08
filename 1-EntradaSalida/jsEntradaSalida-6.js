/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var num1
    num1=document.getElementById("numeroUno").value;

    var num2
    num2=document.getElementById("numeroDos").value;

    resulado=parseInt(num1) + parseInt(num2);
    alert(resulado);


    

    
}

