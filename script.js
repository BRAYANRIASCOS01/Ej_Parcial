const API_URL = '/api/registros';

// Cargar registros al iniciar
async function cargarRegistros() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    actualizarTabla(data);
  } catch (error) {
    console.error("Error al cargar:", error);
  }
}

// Guardar nuevo registro
async function guardarRegistro(tecla) {
  try {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tecla })
    });
    await cargarRegistros(); // Actualizar tabla después de guardar
  } catch (error) {
    console.error("Error al guardar:", error);
  }
}

// Detectar flechas
document.addEventListener('keydown', (e) => {
  const flechas = {
    'ArrowUp': '↑ Arriba',
    'ArrowDown': '↓ Abajo',
    'ArrowLeft': '← Izquierda',
    'ArrowRight': '→ Derecha'
  };
  if (flechas[e.key]) guardarRegistro(flechas[e.key]);
});

// Mostrar registros
function actualizarTabla(registros) {
  const tbody = document.querySelector('#movimientos tbody');
  tbody.innerHTML = registros.map(registro => `
    <tr>
      <td>${registro.id}</td>
      <td>${registro.fecha}</td>
      <td>${registro.tecla}</td>
    </tr>
  `).join('');
}

// Iniciar
cargarRegistros();