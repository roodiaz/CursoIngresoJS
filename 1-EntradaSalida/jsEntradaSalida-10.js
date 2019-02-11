/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var importe
    var descuento
    var final
    
        importe=document.getElementById("importe").value;
        
        descuento=parseInt(importe)*0.25;
        final=parseInt(importe-descuento);


        document.getElementById("resultado").value=final;
}
