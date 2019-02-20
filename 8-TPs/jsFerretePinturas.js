/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    
    var temp
    var cent

    temp=document.getElementById("Temperatura").value;
    temp=parseInt(temp);

    cent=(temp-32)*5/9;

    alert("Equivalen a "+cent+" grados centigrados. 32 Fahrenheit son 0 centígrados");


}

function CentigradosFahrenheit () 
{
    
    var temp1
    var fahr

    temp1=document.getElementById("Temperatura").value;
    temp1=parseInt(temp1);

    fahr=(temp1*9/5)+32;

    alert("Equivalen a "+fahr+" grados fahrenheit. 0 centigrados son 32 Fahrenheit");

}
