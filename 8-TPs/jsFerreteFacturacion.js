/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

    var precio1
    var precio2
    var precio3
    var final

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    final=(precio1 + precio2 + precio3);

    alert("El precio final es "+ final);

}

function Promedio () 
{

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);

    final=(precio1 + precio2 + precio3)/3;

    alert("El promedio final es "+ final);
	
}

function PrecioFinal () 
{
    
    var iva 
    var importe

    precio1=document.getElementById("PrecioUno").value;
    precio2=document.getElementById("PrecioDos").value;
    precio3=document.getElementById("PrecioTres").value;

    precio1=parseInt(precio1);
    precio2=parseInt(precio2);
    precio3=parseInt(precio3);
    
    importe=(precio1 + precio2 + precio3);
    iva=(importe)*0.21;
    final=(importe+iva);
    
    alert("El precio mas Iva es "+ final);
}