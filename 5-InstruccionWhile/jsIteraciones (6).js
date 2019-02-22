function mostrar()
{
  var acumulador=0;
  var promedio;
  var num
  var cont=0;

  while(cont<5)
  {
    cont++
    num=prompt("ingrese numero");
    num=parseInt(num);

    suma=cont+num;
    acumulador=suma;
  }


document.getElementById("suma").value=acumulador;
document.getElementById("promedio").value=acumulador/5;

}//FIN DE LA FUNCIÓN
