function mostrar()
{

   var personas
   var cuenta
   var parte
   var porcentaje
   var iva
   
   personas=prompt("Ingrese numero de personas");
   cuenta=prompt("Ingrese total de cuenta");

   personas=parseInt(personas);
   cuenta=parseInt(cuenta);

   parte=(cuenta/personas);
   porcentaje=(parte)*0.10;
   porcentaje1=(parte+porcentaje);
   iva=(porcentaje1)*0.21
   iva1=(iva+porcentaje1);

   alert("Si la cuenta es de $"+cuenta+" y se divide en un grupo de "+personas+" mas la propina y el iva cada uno debe pagar "+iva1);
   

}
