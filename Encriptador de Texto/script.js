function encriptar(){

    var mensaje = document.getElementById("textarea").value.toLowerCase();

    var textoEncriptado = mensaje.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textarea2").innerHTML = textoEncriptado;
    document.getElementById("btn3").style.display = "show";
    document.getElementById("btn3").style.display = "inherit";
    document.getElementById("textarea2").style.display = "show";
    document.getElementById("textarea2").style.display = "inherit";
    document.getElementById("muneco").style.display = "none";
}

function desencriptar(){

    var mensaje = document.getElementById("textarea").value.toLowerCase();

    var textoEncriptado = mensaje.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textarea2").innerHTML = textoEncriptado;
}

function copiar(){

    var contenido = document.querySelector("#textarea2");
    contenido.select();
    document.execCommand("copy");

}
