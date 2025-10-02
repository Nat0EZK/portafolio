const projectData = {
    'lost-pride': {
        title: "Lost Pride",
        description: "Step into the role of an alpha male lion facing critical decisions for the survival and prosperity of your pride. From hunting vital prey to confronting external threats, every choice impacts the well-being of the collective. This game merges decision-making inspired by Reigns with Quick Time Events (QTEs), adding a unique twist of dynamic, skill-based gameplay after each major decision. The idea was conceived and developed during a 48-hour Game Jam focused on 'Collective Intelligence vs. Collective Madness.'",
        rol: "Director, Game Designer, Lead Programmer",
        assignments: [
            "Led a multidisciplinary team of 2 Artists, 2 Programmers, and 1 Narrative Designer.",
            "Guided and mentored the programming team.",
            "Conceptualized the core decision-making gameplay loop.",
            "Designed and programmed major QTEs (Hunting, Fighting, Maze, Runner).",
            "Implemented QTEs using Object Pooling for performance, including a system to generate 10 unique maze maps.",
            "Programmed the final results panel for each QTE.",
            "Developed the system for dynamic music and SFX transitions between decision-making and action phases to enhance game feel.",
            "Programmed the dialog system.",
            "Managed debugging, testing, and bug fixing to ensure a high-quality product."
        ],
        engine: "Unity", 
        idiomas: "Spanish, English",
        itchLink: "https://itch.io/embed-upload/11190617?color=ffffff",
        media: [
            { type: 'image', src: 'img/lostpride-screenshot.png', alt: 'Lost Pride Main Screen' },
            { type: 'video', src: 'https://www.youtube.com/embed/tf2zexZ1ZuI?si=VrI4qT0TFejDnLVB' }, 
        ]
    },
    'silent-morgue': {
        title: "The Silent Morgue",
        description: "Set in the Victorian era (circa 1880), the player assumes the role of a coroner investigating the causes of death in bodies delivered to the morgue. By meticulously conducting autopsies and detecting patterns, the player must combine physical evidence with police data to identify a serial killer. The game is a unique blend of forensic investigation and atmospheric horror, demanding procedural accuracy and logical deduction.",
        rol: "Game Designer, Lead Programmer",
        assignments: [
            "Conceptualized the core game idea and designed the scene layout for the morgue.",
            "Designed the information and distribution of the in-game forensics manual (book).",
            "Designed the newspaper system, where daily news changes based on player answers and progression.",
            "Programmed the daily sequence flow, including NPC state machines and interaction order.",
            "Developed the system for the executioner's form; validated and logged correct autopsy findings in the player's historical book.",
            "Programmed the layered body cutting and organ extraction mechanics for realistic autopsy simulation.",
            "Integrated SFX to significantly enhance the atmosphere and game feel.",
            "Programmed the dialog system.",
            "Managed debugging, testing, and bug fixing."
        ],
        engine: "Unity",
        idiomas: "English",
        itchLink: "https://itch.io/embed-upload/12335183?color=ffffff",
        media: [
            { type: 'image', src: 'img/thesilentmorguesc1.png', alt: 'The Silent Morgue Scene' },
            { type: 'image', src: 'img/thesilentmorguesc2.png', alt: 'Autopsy Mechanics' },
            // 🛑 ESPACIO PARA LA SEGUNDA IMAGEN ADICIONAL
            { type: 'image', src: 'img/thesilentmorguesc3.png', alt: 'Close-up of a forensic tool' } 
        ]
    },
    'bubble-rondo': {
        title: "Bubble Rondo",
        description: "It's the 2000s, and the real estate bubble has just burst. You are a girl struggling to keep her innovative bubble tea store open. This arcade game is a race against time, set in a strangely hot and long day. The core gameplay requires grid-based movement and precise beverage throwing to serve increasingly demanding NPCs. The project focused on scalable difficulty and robust NPC spawning systems for high replayability.",
        rol: "Lead Programmer, Game Designer",
        assignments: [
            "Designed the difficulty curve and structure for each level.",
            "Created the Level Menu and complex Level Design for harder stages.",
            "Designed the mechanics for changing and managing different bubble tea types.",
            "Programmed the grid-based character movement and the projectile mechanics for launching beverages.",
            "Programmed the NPC state machine.",
            "Developed the NPC spawner using Object Pooling and a dynamic sequence system that allows fine-tuning of difficulty.",
            "Implemented the multi-language system using Scriptable Objects for efficient localization.",
            "Programmed the tutorial sequence using Coroutines for precise timing and flow.",
            "Integrated SFX to enhance the arcade game feel.",
            "Programmed the dialog system.",
            "Managed debugging, testing, and bug fixing."
        ],
        engine: "Unity",
        idiomas: "Spanish, English",
        itchLink: "https://itch.io/embed-upload/12638139?color=ffffff",
        media: [
            { type: 'image', src: 'img/bubblerondo-screenshot-1.png', alt: 'Bubble Rondo Gameplay GIF' },
            { type: 'image', src: 'img/bubblerondo-screenshot-2.png', alt: 'Scoreboard Screen' },
            // 🛑 ESPACIO PARA LA SEGUNDA IMAGEN ADICIONAL
            { type: 'image', src: 'img/bubblerondo-screenshot-3.png', alt: 'In-game action shot' } 
        ]
    },
    'chrono-shift': {
        title: "Chrono Shift",
        description: "An innovative puzzle game where the main mechanic is the manipulation of time. The player must solve intricate temporal puzzles by using the ability to 'rewind' the environment and the actions of various objects and enemies. The central programming challenge involved maintaining and reverting the exact state of multiple game elements across time for a seamless and bug-free rewind function.",
        rol: "Director, Lead Programmer, Game Designer",
        assignments: [
            "Managed a team consisting of 1 Artist and 1 Musician.",
            "Provided creative direction and thematic ideas for the musician's soundtracks.",
            "Guided the artist on the overall pixel art aesthetic.",
            "Wrote the game's core narrative and lore.",
            "Designed and programmed all core game mechanics (Player actions, Enemy AI, Parallax scrolling, Puzzle logic and Achievement system).",
            "Implemented and synchronized SFX and specialized VFX for the time-shift mechanic.",
            "Programmed the dialog system.",
            "Managed debugging, testing, and bug fixing."
        ],
        engine: "Unity",
        idiomas: "English",
        itchLink: "https://itch.io/embed-upload/12919873?color=333333",
        media: [
            { type: 'image', src: 'img/chrono-shift-screenshot-1.png', alt: 'Chrono Shift Puzzle Scene' },
            { type: 'image', src: 'img/chrono-shift-screenshot-2.png', alt: 'Rewind Effect' },
            // 🛑 ESPACIO PARA LA SEGUNDA IMAGEN ADICIONAL
            { type: 'image', src: 'img/chrono-shift-screenshot-3.png', alt: 'Level preview' } 
        ]
    },
    'wamani': {
        title: "Wamani",
        description: "You play as Amaru, the son of a ritual dancer, who must ascend the sacred mountain, Razuhuillca, to face a corrupted Apu (mountain spirit). This 2D platformer is heavily rooted in Andean mythology, focusing on precise jumping and combat. The game's narrative revolves around ancestral duty and the fight against encroaching darkness.",
        rol: "Director, Lead Programmer, Game Designer",
        assignments: [
            "Managed a team of 2 Artists and 1 Programmer.",
            "Created the game's core narrative and designed the player/power-up mechanics, focusing on power-up exchange systems.",
            "Designed the entire map structure and its level difficulty scaling (escalability), strategically placing platforms and power-ups to challenge the player progressively.",
            "Programmed the dynamic camera switching system, enabling smooth transitions between different stages and scenes as the player traverses the map.",
            "Programmed the dialog system.",
            "Implemented the change power-up mechanic.",
            "Managed debugging, testing, and bug fixing."
        ],
        engine: "Unity",
        idiomas: "Spanish",
        itchLink: "https://gold-titan-games.itch.io/wamani",
        media: [
            { type: 'image', src: 'img/wamani-screenshot-1.png', alt: 'Wamani Character' },
            { type: 'image', src: 'img/wamani-screenshot-2.png', alt: 'Ruins Level Scene' },
            { type: 'video', src: 'https://www.youtube.com/embed/Nyn055JQdf4?si=D7Nv2ahfNYP1TBun' }, 
        ]
    },
    'camino-al-trono': {
        title: "Camino al Trono / Path to the Throne",
        description: "A humorous puzzle and simulation game based on the ultimate daily office battle: reaching the sole available restroom on time. The player must plot their path while using everyday office objects as creative traps to sabotage rivals. Each level represents a new workday with increasing difficulty and trickier colleagues. The game challenges players with limited steps and requires strategic pathfinding and timing.",
        rol: "Director, Lead Programmer, Game Designer",
        assignments: [
            "Managed a team of 1 Artist, 1 Musician, and 1 Programmer.",
            "Guided the Musician on achieving the appropriate thematic 'feel' for the soundtrack.",
            "Guided the Artist on the overall game style and aesthetics.",
            "Designed the map and each level to introduce escalating difficulty.",
            "Designed and balanced the item cards to create engaging and fun gameplay.",
            "Designed the layout and distribution for the User Interface (UI).",
            "Programmed the core path creation and deletion mechanics using grid-based systems and pathfinding logic (for wall traversal).",
            "Programmed the pathfinding AI for each NPC rival.",
            "Developed the tutorial sequence using Coroutines for timed step-by-step guidance.",
            "Programmed the game simulation loop, where the player and NPCs follow their programmed routes, interacting with placed traps/cards.",
            "Programmed the Main Menu, Pause Menu, and Game Over screens.",
            "Integrated SFX.",
            "Managed debugging, testing, and bug fixing."
        ],
        engine: "Unity",
        idiomas: "Spanish",
        itchLink: "https://itch.io/embed-upload/14568219?color=0484d1",
        media: [
            { type: 'image', src: 'img/camino-screenshot-1.png', alt: 'Camino al Trono Interface' },
            { type: 'image', src: 'img/camino-screenshot-2.png', alt: 'Decision Card Example' },
            // 🛑 ESPACIO PARA LA SEGUNDA IMAGEN ADICIONAL
            { type: 'image', src: 'img/camino-screenshot-3.png', alt: 'Gameplay trap placement' }
        ]
    }
};

/**
 * El resto de la función loadProjectDetails() permanece igual ya que el código está diseñado para
 * iterar sobre el array 'media' sin importar cuántos elementos tenga.
 */
function loadProjectDetails() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');

    const project = projectData[gameId];

    if (!project) {
        // Manejar el caso de proyecto no encontrado
        document.getElementById('detalle-juego').innerHTML = `
            <div style="text-align: center; padding: 50px;">
                <h1>Project Not Found (Error 404)</h1>
                <p>The game "${gameId}" does not exist. Please return to the menu.</p>
                <a href="index.html#portfolio" style="color: #EA8984;">Back to Portfolio</a>
            </div>
        `;
        return;
    }

    // 3. Rellenar los campos de texto
    document.getElementById('game-title').textContent = `${project.title} | Portfolio`;
    document.getElementById('detalle-titulo').textContent = project.title;
    document.getElementById('detalle-descripcion').textContent = project.description;
    document.getElementById('detalle-rol').textContent = project.rol;
    
    // Rellenar campos Engine e Idiomas
    document.getElementById('detalle-engine').textContent = project.engine; 
    document.getElementById('detalle-idiomas').textContent = project.idiomas;
    
    document.getElementById('jugar-btn').href = project.itchLink;

    // 4. Rellenar las tareas (Assignments)
    const assignmentsList = document.getElementById('detalle-tareas');
    assignmentsList.innerHTML = ''; 
    project.assignments.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        assignmentsList.appendChild(li);
    });

    // 5. Rellenar la galería multimedia
    const mediaContainer = document.getElementById('galeria-detalle');
    mediaContainer.innerHTML = ''; 
    project.media.forEach(item => {
        if (item.type === 'image') {
            const img = document.createElement('img');
            img.src = item.src;
            img.alt = item.alt;
            mediaContainer.appendChild(img);
        } else if (item.type === 'video') {
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