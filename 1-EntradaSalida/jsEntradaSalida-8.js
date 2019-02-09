/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1
    num1=document.getElementById("numeroDividendo").value;

    var num2
    num2=document.getElementById("numeroDivisor").value;

    resto=parseInt(num1) % parseInt(num2);
    alert("el resto es "+resto);

    

}
