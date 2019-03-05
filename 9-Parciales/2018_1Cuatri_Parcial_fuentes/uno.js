
function mostrar()
{

    var ancho = prompt("Ingrese ancho del terreno");
    var largo = prompt("Ingrese largo");

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    perimetro = (ancho + largo)*2;

    alert("El perimetro del rectangulo es de " + perimetro);


}
