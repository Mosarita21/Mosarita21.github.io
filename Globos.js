// Función para generar globos en posiciones aleatorias
function createBalloon() {
    const container = document.getElementById('balloon-container');
    const balloon = document.createElement('div');
    
    balloon.classList.add('balloon');

    // Establecer color aleatorio para cada globo
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33A1', '#FFDB33'];
    balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posicionar el globo en una ubicación aleatoria en la parte inferior
    balloon.style.left = `${Math.random() * 100}vw`;

    // Agregar el globo al contenedor
    container.appendChild(balloon);

    // Eliminar el globo después de que termine la animación
    balloon.addEventListener('animationiteration', () => {
        container.removeChild(balloon);
    });
}

// Crear un nuevo globo cada 1.5 segundos
setInterval(createBalloon, 1500);
