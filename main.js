let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#d47e63;">¿Los huskies una raza dificil de tener como mascotas?</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();


  // Función para abrir el modal
function openModal() {
  document.getElementById('modalContacto').style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
  document.getElementById('modalContacto').style.display = 'none';
}

// Cierra el modal si se hace clic fuera de él
window.onclick = function(event) {
  if (event.target == document.getElementById('modalContacto')) {
    closeModal();
  }
}

// Abre el modal cuando se hace clic en el botón de contacto
document.querySelector('#contacto button').addEventListener('click', openModal);

// Cierra el modal cuando se hace clic en la 'x'
document.getElementById('closeModal').addEventListener('click', closeModal);



document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const nombreInput = document.getElementById('nombre');
  const emailInput = document.getElementById('email');
  const mensajeInput = document.getElementById('mensaje');
  const nombreError = document.getElementById('nombreError');
  const emailError = document.getElementById('emailError');
  const mensajeError = document.getElementById('mensajeError');

  contactForm.addEventListener('submit', function (e) {
    let isValid = true;

    // Validar campo Nombre
    if (nombreInput.value.trim() === '') {
      nombreError.textContent = 'Por favor, ingresa tu nombre.';
      isValid = false;
    } else {
      nombreError.textContent = '';
    }

    // Validar campo Email
    if (emailInput.value.trim() === '') {
      emailError.textContent = 'Por favor, ingresa tu correo electrónico.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }

  
    // Validar campo Mensaje
    if (mensajeInput.value.trim() === '') {
      mensajeError.textContent = 'Por favor, ingresa un mensaje.';
      isValid = false;
    } else {
      mensajeError.textContent = '';
    }

    if (!isValid) {
      e.preventDefault(); // Evita que el formulario se envíe si hay errores
    }
  });
});
