// Variables globales
const MAX_REGISTROS = 20;
let registros = [];
let contador = 1;
const tabla = document.querySelector('#movimientos tbody');

// Mapeo de teclas a símbolos
const TECLAS_FELCHA = {
    'ArrowUp': '↑ Flecha Arriba',
    'ArrowDown': '↓ Flecha Abajo', 
    'ArrowLeft': '← Flecha Izquierda',
    'ArrowRight': '→ Flecha Derecha'
};

// Función para agregar nuevo registro
function agregarRegistro(tecla) {
    // Crear objeto de registro
    const registro = {
        id: contador++,
        fecha: new Date().toLocaleTimeString(),
        tecla: tecla
    };

    // Manejar límite de 20 registros
    if (registros.length >= MAX_REGISTROS) {
        registros = []; // Vaciar array
        contador = 1;   // Reiniciar contador
        tabla.innerHTML = ''; // Limpiar tabla
    }

    registros.push(registro); // Agregar al array
    actualizarTabla();       // Reflejar cambios en la tabla
}

// Función para actualizar la tabla visual
function actualizarTabla() {
    // Limpiar tabla
    tabla.innerHTML = '';
    
    // Mostrar registros en orden inverso (más reciente primero)
    registros.slice().reverse().forEach(registro => {
        const fila = document.createElement('tr');
        
        fila.innerHTML = `
            <td>${registro.id}</td>
            <td>${registro.fecha}</td>
            <td>${registro.tecla}</td>
        `;
        
        tabla.appendChild(fila);
    });
}

// Event listener para teclas
document.addEventListener('keydown', (event) => {
    if (TECLAS_FELCHA[event.key]) {
        agregarRegistro(TECLAS_FELCHA[event.key]);
    }
});