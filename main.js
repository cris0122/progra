const nombre = document.querySelector('.nombre')
const descripcion = document.querySelector('.descripcion')
const fecha = document.querySelector('.fecha')
const hora = document.querySelector('.hora')

const btnAgregarTarea = document.querySelector('.btn-agregar-tareas')
const btnEditarTarea = document.querySelector('.btn-editar-tareas')
const ListadoTareas = document.querySelector('.Listado-Tareas')
const db = window.localStorage

btnAgregarTarea.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: nombre.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        hora: hora.value
    }
    guardarContacto(db, contacto)
}

btnEditarTarea.onclick = () => {
    let contacto = {
        id: idContactoaEditar,
        nombre: nombre.value,
        descripcion: descripcion.value,
        fecha: fecha.value,
        hora: hora.value
    }
    guardarContacto(db, contacto)
}
cargarContactos(db, ListadoTareas)