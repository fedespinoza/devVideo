function base() {
    var boton = document.querySelector('#subir');
    boton.addEventListener('click', nuevoItem, false);
    mostrarItem();
}

function nuevoItem() {
    var clave = document.querySelector('#objetivo').value;
    var descripcion = document.querySelector('#descripcion').value;
    var urgencia = document.querySelector('#urgencia').value;
    var fecha = document.querySelector('#fecha').value;

    var valores = [descripcion, urgencia, fecha];

    localStorage.setItem(clave, valores);
    mostrarItem();
}

function mostrarItem() {
    var caja = document.querySelector('#mostrarDatos');

    caja.innerHTML = '<h3 href="#" onclick="eliminarTodo()">Eliminar Todo</h3>';
    caja.style.color = '#fff';
    caja.style.cursor = 'pointer';
    caja.style.background = '#575757';
    caja.style.padding = '5px 0 0 1px';

    for (var i = 0; i < localStorage.length; i++) {
        var id = localStorage.key(i)
        var valor = localStorage.getItem(id)

        caja.innerHTML += '<p>' + id + ' - ' + valor + '<p>';
    }
}

function eliminarTodo() {
    localStorage.clear();
    location.reload();
    mostrarItem();
}

window.addEventListener('load', base, false);