function mostrar()
{
  
   var compra
   var descuento
   var total
   var iva

  compra=prompt("Ingrese monto de compra en $");

   compra=parseInt(compra);
    
   descuento=(compra)*0.10;
   total=(compra-descuento);
   iva=(total)*0.21;
   iva1=(iva+total);

   alert("Su compra es de $"+compra+" tenes un descuento del 10% queda en $"+descuento+", mas el Iva es $"+iva1);
}
