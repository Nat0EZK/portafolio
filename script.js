let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Función que oculta el menú una vez que selecciono una opción
function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("unity2d");
        habilidades[1].classList.add("unity3d");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("illustrator");
        habilidades[4].classList.add("dotween");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("resolucion");
    }
}

// Función que anima las habilidades en la sección de Aprendiendo
function animarAprendiendo() {
    var aprendiendo = document.getElementById("aprendiendo");
    var distancia_aprendiendo = window.innerHeight - aprendiendo.getBoundingClientRect().top;
    if (distancia_aprendiendo >= 300) {
        let habilidades = document.querySelectorAll("#aprendiendo .habilidad");
        habilidades.forEach((habilidad, index) => {
            setTimeout(() => {
                habilidad.style.transform = "translateY(0)";
                habilidad.style.opacity = "1";
            }, index * 300); // Retraso de 300ms entre cada logo
        });
    }
}

// Maneja el scroll y la animación de las habilidades
window.onscroll = function() {
    animarAprendiendo();
    efectoHabilidades();
}

// Función para manejar el clic en las imágenes del portafolio
function manejarClicPortafolio(event) {
    // Prevenir el comportamiento por defecto si es necesario
    // event.preventDefault(); 

    // Obtener el enlace del contenedor del proyecto
    const enlace = event.currentTarget.dataset.enlace;

    if (enlace) {
        window.open(enlace, '_blank');
    }
}

// Añadir el manejador de clic a las imágenes del portafolio
document.addEventListener('DOMContentLoaded', function() {
    const proyectos = document.querySelectorAll('.portfolio .proyecto');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('click', manejarClicPortafolio);
    });
});
