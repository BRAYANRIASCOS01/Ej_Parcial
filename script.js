let contador = 1;
const tabla = document.getElementById('movimientos').getElementsByTagName('tbody')[0];

document.addEventListener('keydown', function(event) {
    const flechas = {
        'ArrowUp': 'Flecha Arriba ↑',
        'ArrowDown': 'Flecha Abajo ↓',
        'ArrowLeft': 'Flecha Izquierda ←',
        'ArrowRight': 'Flecha Derecha →'
    };

    if (flechas[event.key]) {
        agregarFila(flechas[event.key]);
    }
});

function agregarFila(tecla) {
    const fila = tabla.insertRow(0);
    
    const celdaId = fila.insertCell(0);
    const celdaFecha = fila.insertCell(1);
    const celdaTecla = fila.insertCell(2);
    
    celdaId.textContent = contador++;
    celdaFecha.textContent = new Date().toLocaleString();
    celdaTecla.textContent = tecla;
}