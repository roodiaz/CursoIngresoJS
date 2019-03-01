function mostrar()
{

    var num1 = prompt("Ingrese un numero");
    var num2 = prompt("Ingrese otro numero");
    num1=parseInt(num1);
    num2=parseInt(num2);
    var div
    var suma

    if(num1 == num2)
    {
        alert(num1+" y "+num2+" son iguales");
    }

    if(num1 > num2)
    {
        div= num1/num2;
        alert("la division es igual a "+div);
    }


    if(num1 < num2)
    {
        suma=num1+num2;
        alert("la suma es igual a "+suma);

        if(suma<50)
        {
            alert("la suma es "+suma+" y es menor a 50");
        }
    }

    



}
