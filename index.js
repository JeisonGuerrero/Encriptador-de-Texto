function resetText(params) {
    document.getElementById('texto').value = "";   
}

document.getElementById("boxResultado").style.display = "none";

function encriptar() {
    let textoUsiario = document.getElementById('texto').value;
    let validador = /[A-Z]/.test(textoUsiario);
    
    if (textoUsiario.length === 0) {
        alert("Debes agregar un texto en minuscula");
        resetText();
        return;
    } else if (validador) {
            alert("Solo son permitidas letras minúsculas y sin acentos");
            resetText();
            return;
        }else{
            document.getElementById("boxRespuesta").style.display = "none";
            document.getElementById("boxResultado").style.display = "block";
        }
    return console.log()
}

function desencriptar() {
    
}