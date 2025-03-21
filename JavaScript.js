function NumeroRandom()
{
    var CantidadDeIntentos=0;
    var Respuesta = document.getElementById("eleccion").value;
    var numRandom = parseInt(document.getElementById("random").value);
    console.log(Respuesta +" "+ numRandom);
    CantidadDeIntentos++;
    if (Respuesta<numRandom)
    {
        alert("El numero es mayor");
        console.log("a")
    }
    else if (Respuesta>numRandom)
    {
        alert("El numero es menor");
        console.log("a")
    }
    else if (Respuesta==numRandom)
    {
        alert("te felicito, muy bien, ahora a trabajar");
        alert ("Tuviste " + CantidadDeIntentos + " intentos");
    }
    else
    {
        console.log("adsda");
    }
    console.log(numRandom +" "+ Respuesta);
}
function GenerarNum()
{
    var numRandom = Math.floor(Math.random()*100 + 1);
    document.getElementById("random").value = numRandom;
    alert("Generaste un nuevo numero");
    console.log(numRandom);
}