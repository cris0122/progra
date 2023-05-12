let idContactoaEditar = 0;
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'

}

const cargarContactos = (db, parentNode) => {
    let claves = Object.keys(db)
    console.log(claves)
    for (claves of claves) {
        let contacto = JSON.parse(db.getItem(claves))
        crearContacto(parentNode, contacto, db)

    }
}

const crearContacto = (parentNode, contacto, db) => {
    let divContacto = document.createElement('div')
    let nombreContacto = document.createElement('h3')
    let descripcionEvento = document.createElement('p')
    let fechaEvento = document.createElement('p')
    let horaEvento = document.createElement('p')

    let iconoBorrar = document.createElement('span')
    let iconoEditar = document.createElement('span')

    nombreContacto.innerHTML = contacto.nombre
    descripcionEvento.innerHTML = contacto.descripcion
    fechaEvento.innerHTML = contacto.fecha
    horaEvento.innerHTML = contacto.hora

    iconoBorrar.innerHTML = ' delete_forever'
    iconoEditar.innerHTML = 'edit_element'

    divContacto.classList.add('Tarea')
    iconoBorrar.classList.add('material-icons', 'icono')
    iconoEditar.classList.add('material-icons', 'material-symbols-outlined', 'iconoEditar')

    nombreContacto.classList.add('nombre')
    descripcionEvento.classList.add('descripcion')
    fechaEvento.classList.add('fecha')
    horaEvento.classList.add('hora')

    iconoBorrar.onclick = () => {


        let text = "Desea Eliminar el contacto?";
        if (confirm(text) == true) {
            text = "Contacto Eliminado!";
        } else {
            return false;
        }


        db.removeItem(contacto.id)
        window.location.href = '/'

    }

    iconoEditar.onclick = () => {
        let contactoAEditar = JSON.parse(db.getItem(contacto.id))
        nombre.value = contactoAEditar.nombre;
        numero.value = contactoAEditar.numero;
        direccion.value = contactoAEditar.direccion;
        document.getElementById("agregar").classList.add("ocultar");
        document.getElementById("agregar").classList.remove("mostrar");

        document.getElementById("editar").classList.add("mostrar");
        document.getElementById("editar").classList.remove("ocultar");
        idContactoaEditar = contacto.id;
    }


    divContacto.appendChild(nombreContacto)
    nombreContacto.classList.add('nombre')
    descripcionEvento.classList.add('descripcion')
    divContacto.appendChild(nombreContacto)
    divContacto.appendChild(descripcionEvento)
    divContacto.appendChild(fechaEvento)
    divContacto.appendChild(horaEvento)
    divContacto.appendChild(iconoBorrar)
    divContacto.appendChild(iconoEditar)

    parentNode.appendChild(divContacto)


}