/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    
    var importe
    
        importe=document.getElementById("importe").value;
        importe=parseInt(importe);
    
    
    
    var resultado
        
        resultado=parseInt(importe)+parseInt(importe)*0.25;
        document.getElementById("resultado").value=resultado;
}
