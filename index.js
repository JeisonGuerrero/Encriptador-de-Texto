document.getElementById("boxResultado").style.display = "none";

function resetText(params) {
    document.getElementById("texto").value = "";
    document.getElementById("mensaje").value = "";   
}

function encriptarTexto(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptarTexto(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}


function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

function encriptar() {
    let textoUsiario = document.getElementById('texto').value;
    let validador = /^[a-z\s]+$/.test(textoUsiario);
    
    if (textoUsiario.length === 0) {
        alert("Debes agregar un texto en minuscula");
        resetText();
        return;
    } else if (!validador) {
            alert("Solo son permitidas letras minúsculas y sin acentos");
            resetText();
            return;
        }else{
            document.getElementById("boxRespuesta").style.display = "none";
            document.getElementById("boxResultado").style.display = "block";
            let textoEncriptado = encriptarTexto(textoUsiario);
            document.getElementById("mensaje").value = textoEncriptado;
        }
    return
}

function desencriptar() {
    let textoEncriptado = document.getElementById("mensaje").value
    if (document.getElementById("texto").value.length === 0) {
        alert("Debes ingresar una frase");
    }else{
        let textoDesencriptado = desencriptarTexto(textoEncriptado);
        document.getElementById("mensaje").value = textoDesencriptado
        document.getElementById("texto").value = "";
    }
    return
}

