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

    var lamparas
    var precio
    var marca
    var descuento

    lamparas=document.getElementById("Cantidad").value;
    marca=document.getElementById("Marca").value;
    descuento=document.getElementById("PrecioDescuento").value;

    lamparas=parseInt(lamparas);
    precio=(lamparas*35);
    descuento=parseInt(descuento);
    


    if(lamparas>=6)
    {
        desc=(precio)-(precio)*0.5;
        document.getElementById("precioDescuento").value=desc;
    }
    

    if(lamparas=5 && marca=="ArgentinaLuz")
    {
        desc1=(precio)-(precio)*0.4;
        document.getElementById("precioDescuento").value=desc1;
    }
         else
        {
             desc2=(precio)-(precio)*0.3;
             document.getElementById("precioDescuento").value=desc2;
        }


    if(lamparas=4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
    {
        desc3=(precio)-(precio)*0.25;
        document.getElementById("precioDescuento").value=desc3;
    }
         else
        {
            desc4=(precio)-(precio)*0.2;
            document.getElementById("precioDescuento").value=desc4;
        } 
    

    if(lamparas=3 && marca=="ArgentinaLuz")
    {
        desc5=(precio)-(precio)*0.15;
        document.getElementById("precioDescuento").value=desc5;
    }
    if(lamparas=3 && marca=="FelipeLamparas")
    {
        desc6=(precio)-(precio)*0.1;
        document.getElementById("precioDescuento").value=desc6;
    }
         else
        {
             desc7=(precio)-(precio)*0.05
        }

    
    if(descuento>120)
    {
        ingreso=(descuento)*0.1;
        preciofinal=(descuento)+(preciofinal);
        document.getElementById("precioDescuento").value=preciofinal;

        alert("IIBB Usted pago "+descuento+", siendo"+ingreso+" el impuesto que se pagó");
    }

    

    


 	
    
}
