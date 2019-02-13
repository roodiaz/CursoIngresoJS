/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var long
    var anch
    var perimetro


    long=document.getElementById("Largo").value;
    anch=document.getElementById("Ancho").value;

    long=parseInt(long);
    anch=parseInt(anch);

    perimetro=(long+anch)*2;
    alambres=(perimetro)/3;

    alert("Se deben comprar 3 alambres de "+alambres+ " cm para "+ perimetro+ " cm de terreno" );


}

function Circulo () 
{

    var rad
    var diamentro
    var terreno
    
    rad=document.getElementById("Radio").value;

    rad=parseInt(rad);
    diametro=parseInt(rad)*2;
    terreno=parseInt(diametro)*3.14;
    alambres=parseInt(terreno)/3;

    alert("Se deben comprar 3 alambres de "+alambres+ " cm para "+ terreno+ " cm de terreno" );
    al


	
}

function Materiales () 
{

    var long
    var anch
    var superficie


    long=document.getElementById("Largo").value;
    anch=document.getElementById("Ancho").value;

    long=parseInt(long);
    anch=parseInt(anch);

    superficie=(long*anch);
    cemento=(superficie)/2;
    cal=(superficie)/3;

    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " de cal para una superficie de "+ superficie+  "metros cuadrados");

    
}