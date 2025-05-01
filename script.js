document.addEventListener('DOMContentLoaded', () => {
    // Renderizar gráfico de estadísticas
    const ctx = document.getElementById('graficoEstadisticas').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Primaria', 'Secundaria', 'Preparatoria'],
            datasets: [{
                label: '% de abandono escolar',
                data: [5, 12, 18],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true
        }
    });
});

function registrarEncuesta() {
    const opciones = document.getElementsByName('opcion');
    let seleccion = '';
    for (const opcion of opciones) {
        if (opcion.checked) {
            seleccion = opcion.value;
            break;
        }
    }
    const resultado = document.getElementById('resultadoEncuesta');
    if (seleccion) {
        resultado.textContent = `¡Gracias por tu opinión! Elegiste: ${seleccion}`;
    } else {
        resultado.textContent = 'Por favor selecciona una opción.';
    }
}