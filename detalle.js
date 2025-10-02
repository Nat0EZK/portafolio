const projectData = {
    'lost-pride': {
        title: "Lost Pride",
        description: "Aquí va una descripción detallada de Lost Pride. Describe el concepto, la narrativa, el objetivo de la jugabilidad y el desafío de su desarrollo.",
        rol: "Game Programmer, Game Designer",
        assignments: [
            "Implementación completa del sistema de combate y habilidades.",
            "Diseño e iteración de los niveles principales.",
            "Integración de animaciones y VFX.",
            "Optimización de rendimiento para web."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/11190617?color=ffffff",
        media: [
            { type: 'image', src: 'img/lostpride-screenshot-1.png', alt: 'Gameplay de Lost Pride' },
            { type: 'image', src: 'img/lostpride-screenshot-2.png', alt: 'Arte conceptual de Lost Pride' },
            // Puedes añadir videos/iframes aquí
            // { type: 'video', src: 'URL_DEL_VIDEO_YOUTUBE' }
        ]
    },
    'silent-morgue': {
        title: "The Silent Morgue",
        description: "Descripción de The Silent Morgue. Enfócate en el género de simulación y el ambiente de terror. ¿Qué hace al juego único?",
        rol: "Game Designer, Sound Designer",
        assignments: [
            "Diseño de la mecánica central de autopsias.",
            "Creación de la atmósfera de sonido (foley y música ambiental).",
            "Documentación de diseño (GDD) y pruebas de usuario."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/12335183?color=ffffff",
        media: [
            { type: 'image', src: 'img/silentmorgue-screenshot-1.png', alt: 'Escena de The Silent Morgue' }
        ]
    },
    'bubble-rondo': {
        title: "Bubble Rondo",
        description: "Descripción de Bubble Rondo. Menciona su estilo arcade y los desafíos de implementar las mecánicas de burbujas y movimiento.",
        rol: "Game Programmer",
        assignments: [
            "Programación de la física y colisiones de las burbujas.",
            "Desarrollo de la interfaz de usuario y sistemas de puntuación."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/12638139?color=ffffff",
        media: [
            { type: 'image', src: 'img/bubblerondo-gameplay.gif', alt: 'Gameplay en GIF de Bubble Rondo' }
        ]
    },
    'chrono-shift': {
        title: "Chrono Shift",
        description: "Descripción de Chrono Shift. Explica el concepto de viaje en el tiempo y cómo la mecánica afecta la resolución de puzzles.",
        rol: "Game Designer, Game Programmer",
        assignments: [
            "Diseño de puzzles basados en el tiempo y el espacio.",
            "Implementación del sistema de 'rewind' (regreso en el tiempo)."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/12919873?color=333333",
        media: [
            { type: 'image', src: 'img/chrono-shift-screenshot-1.png', alt: 'Escena de puzzle de Chrono Shift' }
        ]
    },
    'wamani': {
        title: "Wamani",
        description: "Descripción de Wamani. Resalta el contexto cultural (incaico) y los desafíos de un platformer 2D. ¿Qué elementos implementaste?",
        rol: "Game Programmer",
        assignments: [
            "Desarrollo del control de personaje (saltos, movimientos).",
            "Programación de la lógica de los enemigos y coleccionables."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/14030668?color=aa8138",
        media: [
            { type: 'image', src: 'img/wamani-screenshot-1.png', alt: 'Personaje de Wamani' }
        ]
    },
    'camino-al-trono': {
        title: "Camino al Trono",
        description: "Descripción de Camino al Trono. ¿Cómo se combinan el puzzle y la simulación? Describe la interfaz y las decisiones clave.",
        rol: "Game Designer, Sound Designer",
        assignments: [
            "Diseño del flujo de decisiones y sus consecuencias.",
            "Creación de efectos de sonido y música para reflejar el ambiente de la corte."
        ],
        language: "C# (Unity)",
        itchLink: "https://itch.io/embed-upload/14568219?color=0484d1",
        media: [
            { type: 'image', src: 'img/camino-screenshot-1.png', alt: 'Interfaz de Camino al Trono' }
        ]
    }
    // Añade más proyectos aquí
};

/**
 * Función principal para cargar y renderizar los datos del proyecto en la página.
 */
function loadProjectDetails() {
    // 1. Obtener el parámetro 'game' de la URL
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');

    // 2. Verificar si el ID existe en la base de datos
    const project = projectData[gameId];

    if (!project) {
        // Manejar el caso de proyecto no encontrado
        document.getElementById('detalle-juego').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h1>Proyecto No Encontrado (Error 404)</h1>
                <p>El juego con el ID "${gameId}" no existe en la base de datos.</p>
                <a href="index.html#portfolio" style="color: #EA8984;">Volver al Portfolio</a>
            </div>
        `;
        return;
    }

    // 3. Rellenar los campos de texto
    document.getElementById('game-title').textContent = `${project.title} | Portfolio`;
    document.getElementById('detalle-titulo').textContent = project.title;
    document.getElementById('detalle-descripcion').textContent = project.description;
    document.getElementById('detalle-rol').textContent = project.rol;
    document.getElementById('detalle-lenguaje').textContent = project.language;
    document.getElementById('jugar-btn').href = project.itchLink;

    // 4. Rellenar las tareas (Assignments)
    const assignmentsList = document.getElementById('detalle-tareas');
    assignmentsList.innerHTML = ''; // Limpiar lista anterior
    project.assignments.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        assignmentsList.appendChild(li);
    });

    // 5. Rellenar la galería multimedia
    const mediaContainer = document.getElementById('galeria-detalle');
    mediaContainer.innerHTML = ''; // Limpiar galería anterior
    project.media.forEach(item => {
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            mediaContainer.appendChild(img);
        } else if (item.type === 'video') {
            // Asume que es un iframe para un video de YouTube o Itch.io
            const iframe = document.createElement('iframe');
            iframe.width = "100%";
            iframe.height = "315";
            iframe.src = item.src;
            iframe.frameborder = "0";
            iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);
        }
    });
}

// Ejecutar la función cuando la página esté completamente cargada
document.addEventListener('DOMContentLoaded', loadProjectDetails);