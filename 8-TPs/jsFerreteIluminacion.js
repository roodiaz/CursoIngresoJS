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
    var preciofinal = document.getElementById("precioDescuento").value;

    cantidad = parseInt(cantidad);
    precio = cantidad*35;

    var desc50 = precio-precio*0.50;
    var desc40 = precio-precio*0.30;
    var desc20 = precio-precio*0.20
    var desc25 = precio-precio*0.25;
    var desc15 = precio-precio*0.15;
    var desc10 = precio-precio*0.10;
    var desc5 = precio-precio*0.05;

    switch(cantidad)
    {
        case 5:
        if(marca=="ArgentinaLuz"){
            total=cantidad*precio*0.6;
        }
        else{
            total=cantidad*precio*0.7;
        }
    break;
     
        case 4:
        if(marca=="ArgentinaLuz"||"FelipeLamaparas"){
            total=cantidad*precio*0.6;
        }
        else{
            total=cantidad*precio*0.7;
        }
    break;

        case 3:


    


 	
    
}
