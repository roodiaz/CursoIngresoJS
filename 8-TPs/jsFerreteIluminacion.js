/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidad = document.getElementById("Cantidad").value;
    var marca = document.getElementById("Marca").value;
    var total = document.getElementById("precioDescuento").value;
    
    total=parseInt(total);
    cantidad = parseInt(cantidad);
    precio = cantidad*35;

    var desc50 = precio-precio*0.50;
    var desc40 = precio-precio*0.40;
    var desc30 = precio-precio*0.30;
    var desc20 = precio-precio*0.20;
    var desc25 = precio-precio*0.25;
    var desc15 = precio-precio*0.15;
    var desc10 = precio-precio*0.10;
    var desc5 = precio-precio*0.05;


    if(cantidad>=6)
    {
        document.getElementById("precioDescuento").value=desc50;
    }


    if(cantidad == 5)
    {
        if(marca == "ArgentinaLuz")
        {
            document.getElementById("precioDescuento").value=desc40;
        }
        else
        {
            document.getElementById("precioDescuento").value=desc30;
        }   
    }

    if(cantidad == 4)
    {
        if(marca == "ArgentinaLuz" || marca=="FelipeLamparas")
        {
            document.getElementById("precioDescuento").value=desc25;
        }
        else
        {
            document.getElementById("precioDescuento").value=desc20;
        } 
    }

    if(cantidad == 3)
    {
        if(marca == "ArgentinaLuz")
        {
            document.getElementById("precioDescuento").value=desc15;
        }
        if(marca == "FelipeLamparas")
        {
            document.getElementById("precioDescuento").value=desc10;
        }
        else
        {
            document.getElementById("precioDescuento").value=desc5;          
        }
    }

    if(total > 120)
    {
        total1=total*0.10;
        preciofinal=total+total1;
        alert("Usted pago "+total+", siendo "+total1+" el impuesto que se pago");
        document.getElementById("precioDescuento").value=preciofinal;

        
    }

    

    


    


 	
    
}
