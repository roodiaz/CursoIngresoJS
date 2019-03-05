function mostrar()
{
    var num1 = prompt("Ingrese primer numero");
    var num2 = prompt("Ingrese segundo numero");

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    if(num1 == num2)
    {
        alert("La concatenacion de estos numeros es: "+num1+num2);
    }
    if(num1 > num2)
    {
        resta = num1 - num2
        alert("La resta es: "+resta);
    }
    if(num1 < num2)
    {
        suma = num1 + num2;
        alert("La suma es: " + suma);
    }
    if(suma > 10)
    {
        alert("La suma es "+suma+" y supero el 10");
    }
    

}
