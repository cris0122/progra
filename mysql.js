const mysql = require('mysql');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1973',
    database: 'beltran' // Reemplaza con el nombre de tu base de datos
});

// Método para insertar datos en una tabla
function insertarDatos(nombre, descripcion,fecha,hora) {
    const datos = { nombre: nombre, descripcion: descripcion, fecha:fecha, hora:hora };

    connection.query('INSERT INTO eventos SET ?', datos, (error, results, fields) => {
        if (error) {
            console.error('Error al insertar datos: ' + error.stack);
            return;
        }

        console.log('Datos insertados correctamente.');
    });
}

// Establecer conexión
connection.connect((error) => {
    if (error) {
        console.error('Error al conectar a MySQL: ' + error.stack);
        return;
    }

    console.log('Conexión exitosa a MySQL.');

    // Llamar al método de inserción
    insertarDatos('fiesta', 'micasa','2023-05-23','23:00');

    // Cerrar conexión
    connection.end((error) => {
        if (error) {
            console.error('Error al cerrar la conexión: ' + error.stack);
            return;
        }

        console.log('Conexión cerrada exitosamente.');
    });
});