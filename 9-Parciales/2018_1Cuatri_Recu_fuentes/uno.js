
function mostrar()
{

    var masc1
    var masc2
    var peso1
    var peso2

    masc1=prompt("Ingrese nombre de mascota uno");
    masc2=prompt("Ingrese nombre de mascota dos");

    peso1=prompt("Ingrese peso de mascota uno");
    peso2=prompt("Ingrese peso de mascota dos");

    peso1=parseInt(peso1);
    peso2=parseInt(peso2);

    total=(peso1 + peso2);

    alert("Tenes dos mascotas "+masc1+ " y "+masc2+" que pesan "+peso1+ " y "+peso2+ " kilos, la suma de los kilos es "+ total);
    
}
