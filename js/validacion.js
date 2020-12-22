
var titulo = document.getElementById('titulo');
var subtitulo = document.getElementById('subtitulo');
var descripcion = document.getElementById('descripcion');
var archivo = document.getElementById('subirArchivo');


function validarDatos() {
    titulo.addEventListener("input", validarTitulo)
    subtitulo.addEventListener("input", validarSubtitulo)
    descripcion.addEventListener("input", validarDescripcion)
    archivo.addEventListener("input", validarArchivo)

    validarTitulo()
    validarSubtitulo()
    validarDescripcion()
    validarArchivo()
}


function validarTitulo() {
    if (titulo.value == '') {
        titulo.setCustomValidity('Ingrese su título')
    } else {
        titulo.setCustomValidity('')
    }
}

function validarSubtitulo() {
    if (subtitulo.value == '') {
        subtitulo.setCustomValidity('Ingrese su subtítulo')
    } else {
        subtitulo.setCustomValidity('')
    }
}

function validarDescripcion() {
    if (descripcion.value == '') {
        descripcion.setCustomValidity('Ingrese una descripción')
    } else {
        descripcion.setCustomValidity('')
    }
}

function validarArchivo() {
    if (archivo.value == '') {
        archivo.setCustomValidity('Ingresa su título')
    } else {
        archivo.setCustomValidity('')
    }
}

window.addEventListener("load", validarDatos)

//Validar extension

function validarExt(){
    var archivoInput = document.getElementById('subirArchivo');
    var archivoRuta = archivoInput.value;
    var extPermitidas = /(.mp4)$/i;

    if(!extPermitidas.exec(archivoRuta)){
        alert('Asegurate de haber subido un archivo formato .mp4');
        archivoInput.value='';
        return false;
    }else{
        if(archivoInput.files && archivoInput.files[0]){
            var visor = new FileReader();
            visor.onload=function(e){
                document.getElementById('visorArchivo').innerHTML='<embed src="'+e.target.result+'" width="500" height="500">';
                
            }
        }
    }
}




/**************COLOR INPUT BUSCADOR**************/

var buscar = document.getElementById('buscador')

function cambiaColor(){
        buscar.style.border='1px solid yellow';
}

function saleDelElemento(){
    buscar.style.border='1px solid black';
}
