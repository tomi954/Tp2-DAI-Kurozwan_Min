function NumeroRandom()
{
    var CantidadDeIntentos=0;
    var Respuesta = parseInt(document.getElementById("eleccion").value);
    var numRandom = parseInt(document.getElementById("numero").value);
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
    else (Respuesta==numRandom)
    {
        alert("te felicito, muy bien, ahora a trabajar");
        alert ("Tuviste " + CantidadDeIntentos + " intentos");
    }
    console.log(numero +" "+ eleccion);
}
function GenerarNum()
{
    let numRandom = Math.floor(Math.random()*100 + 1);
    alert("Generaste un nuevo numero");
    console.log(numRandom);
}