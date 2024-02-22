const campo_usuario = document.querySelector("#textUser");

const matrizVocal = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

inicio();

function inicio(){
    document.getElementById('inf').style.display = 'none';
    document.getElementById('copiaTxt').style.display = 'none';
    return;
}

function limpiar(){
    asignarElemento('h2', '');
    document.getElementById('borrar').style.display = 'none';
    document.getElementById('jpg').style.display = 'none';  
    return;   
}

function asignarElemento(elemento, texto){
    let elementHTML = document.querySelector(elemento);
    elementHTML.innerHTML = texto;
    return;
}

function leetxt(){
    var txt = document.getElementById('textUser').value;
    if(/[a-z]/.test(txt) != true){
        document.getElementById('inf').style.display = 'list-item';
    }else {
        document.getElementById('copiaTxt').removeAttribute('disabled');
        inicio();
        limpiar();
        document.getElementById('copiaTxt').style.display = 'inline';  
        return false;
    }    
}

function encriptador(){
    leetxt();
    if(leetxt()== false){
        const text = encripta(campo_usuario.value);
        asignarElemento('h2', text);
        document.getElementById('textUser').value=''.replace();
    }
    return;
}

function encripta(fraseE){
    for(let i = 0; i < matrizVocal.length; i++){
        if(fraseE.includes(matrizVocal[i][0])){
            fraseE = fraseE.replaceAll(
                matrizVocal[i][0],
                matrizVocal[i][1]
            )
        }
    }
    return fraseE;
}

function desenctriptador(){
    leetxt();
    if(leetxt()== false){
        const text = desencripta(campo_usuario.value);
        asignarElemento('h2', text);
        document.getElementById('textUser').value=''.replace();
    } 
    return;
}

function desencripta(mensajeE){
    let i = parseInt(matrizVocal.length);
    while( i > 0){
        i--;
        if(mensajeE.includes(matrizVocal[i][1])){
            mensajeE = mensajeE.replaceAll(
                matrizVocal[i][1],
                matrizVocal[i][0]
            )
        }
    }
    return mensajeE;
}

function copia(){
    let texto = document.getElementById('dsencripta').innerText;       
    document.getElementById('textUser').value=texto.replace();
    document.getElementById('desencry').removeAttribute('disabled');
    limpiar();
    inicio();
    return;
}
