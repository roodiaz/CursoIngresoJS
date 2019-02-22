function mostrar()
{

cont=0;
var sexo=prompt("ingrese f ó m .");

while(sexo !="f" && sexo !="m")
{
  cont++;
  num=prompt("Sexo equivocado. Intentar nuevamente");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN
