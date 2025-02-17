// This file contains the details of projects that I've worked on over my development journey.

const projects = [
  {
    name: "Claw Stars",
    type: "Mobile Game",
    thumbnailURL: "/images/ClawStars.jpg",
    videoURL: "/videos/ClawStars.mp4",
    pageURL: "/projects/claw-stars",
    desc: "A unique Casual Social Claw Machine game that brings in the revolutionary gameplay of Claw Machines with the adorable collection of capsule toys. Travel from planet to planet as you gather the riches left by past civilizations and help rebuild these broken worlds. With each claw, you will gather gold, collect relics and even save creatures that have been mysteriously trapped! Compete with your friends and gather collectibles as you gather riches in the Claw Stars universe - one claw at a time!",
    tags: [
      "Unity",
      "C#",
      "GitHub",
      "Dev2Dev",
      "Appsflyer",
      "API Integration",
      "User Interface",
      "Unity Tool Development",
      "Localisation",
      "QA Testing",
    ],
    contributions: [
      "Collaborated closely with game designers, artists, backend developers, and fellow Unity programmers to develop new content and enhance the player experience.",
      "Developed and launched LiveOps content, including in-game events, content updates, and localization improvements, to maintain player engagement.",
      "Implemented UI/UX designs from the art and design team into functional, polished user interfaces within Unity.",
      "Integrated third-party analytics platforms such as DevToDev, enabling data-driven decisions to optimize event performance, sales, and gameplay mechanics.",
      "Built custom Unity tools and extension methods to streamline development workflows and improve team efficiency.",
      "Rapidly prototyped and iterated on new gameplay mechanics based on design requirements.",
      "Conducted QA testing and resolved bugs to ensure a stable and high-quality player experience.",
    ],
  },
  {
    name: "Color Launch",
    type: "Mobile Game",
    thumbnailURL: "/images/ColorLaunch.png",
    videoURL: "/videos/ColorLaunch.mp4",
    videoWidth: "30%",
    pageURL: "/projects/color-launch",
    desc: "An endless casual 'drag-and-shoot' game where players launch themselves through procedurally generated obstacle courses, shifting colors along the way. Precision and quick reflexes are key to mastering this vibrant challenge!",
    tags: [
      "Unity",
      "Google Play",
      "C#",
      "GitHub",
      "Procedural Generation",
      "Cloud Saving",
      "User Interface",
      "In-Game Advertisements",
      "Notification System",
      "Game Art",
      "Game Design",
      "QA Testing",
    ],
    contributions: [
      "Integrated the Google Play plugin to implement cloud saving, in-app purchases, leaderboards, and achievements, enhancing player retention and monetization.",
      "Developed a hybrid save system that supports both cloud and local storage, ensuring player progress is preserved even when cloud saving is unavailable, with automatic cloud sync when connectivity is restored.",
      "Implemented procedural generation algorithms to create dynamic and engaging obstacle courses, ensuring varied gameplay experiences.",
      "Designed and developed the game's User Interface (UI), focusing on intuitive navigation and player accessibility.",
      "Ensured responsive scaling and layout adjustments to support a wide range of mobile screen sizes and resolutions.",
      "Created a dynamic visual system allowing the game's aesthetics to adapt based on the player's equipped color palette.",
      "Implemented time-based and ad-based reward systems to drive player engagement and increase monetization opportunities.",
      "Developed a notification system to re-engage players and promote in-game events and updates.",
      "Created a custom laser shader to achieve unique visual effects and enhance the game's graphical quality.",
      "Designed and created all game art assets, establishing the visual identity and ensuring a cohesive presentation throughout the project.",
      "Independently designed the game's core mechanics and systems, balancing gameplay to deliver a polished and engaging player experience.",
    ],
  },
  {
    name: "Go Gold Castle",
    type: "PC Game",
    thumbnailURL: "/images/GoGoldCastle.jpg",
    videoURL: "/videos/GoGoldCastle.mp4",
    pageURL: "/projects/go-gold-castle",
    desc: "An action-packed 4 person multiplayer party pixel game. It has a variety of funky little pixel characters for players to choose from, each with their own awesome abilities and skills.",
    tags: [
      "Unity",
      "C#",
      "GitHub",
      "Steamworks",
      "Online Multiplayer Development",
      "QA Testing",
    ],
    contributions: [
      "Led the transition of Go Gold Castle to an online multiplayer experience by integrating Steamworks networking features.",
      "Refactored the core game systems to improve performance, readability, and scalability.",
      "Expanded the character roster by designing and implementing new characters, including their unique abilities, animations, and UI elements.",
      "Authored comprehensive documentation to support future development, optimize system performance, and facilitate bug fixes.",
    ],
  },
  {
    name: "Trapped",
    type: "PC Game",
    thumbnailURL: "/images/Trapped.png",
    videoURL: "/videos/Trapped.mp4",
    pageURL: "/projects/trapped",
    desc: "You've been Trapped in a strange facility with no idea how to escape. Strange creatures lurk in the shadows, and danger is everywhere. Armed with an experimental gun and unlimited ammo, you'll have to fight your way through environmental hazards and relentless enemies. Think fast, shoot faster, and break free in this intense 2D platform shooter.",
    tags: ["Unity", "C#", "GitHub", "Enemy AI Development", "QA Testing"],
    contributions: [
      "Designed and programmed every enemy, including their behaviors and interactions, within the game.",
    ],
  },
  {
    name: "Survive!",
    type: "Mobile Game",
    thumbnailURL: "/images/Survive!.png",
    videoURL: "/videos/Survive!.mp4",
    pageURL: "/projects/survive!",
    desc: "A fast-paced 2D endless shooter set in a dying world consumed by 'The Entity.' With danger closing in, players must outrun the relentless force while taking down enemies that stand in their way. How long can you survive?",
    tags: [
      "Unity",
      "C#",
      "GitHub",
      "Procedural Generation",
      "Enemy AI Development",
      "Weapon Development",
      "User Interface",
      "Local Save System",
      "Game Art",
      "Game Design",
      "QA Testing",
    ],
    contributions: [
      "Developed core game systems, including local save, currency, scoring, and shop systems, ensuring smooth game progression and player data management.",
      "Implemented procedural platform generation, spawning logic, and dynamic level elements like moving platforms and teleporters to enhance gameplay variety.",
      "Created various player-centric mechanics such as knockback effects, color changes, a health bar, and scene transitions to improve visual feedback and player experience.",
      "Programmed interactive systems like laser shooter AI, rotating arrow indicators, and a guiding arrow to help players navigate the environment and overcome challenges.",
      "Built the opening scene, along with a generator system that activates game components, ensuring smooth startup and gameplay flow.",
      "Designed and implemented the user interface, tying together game systems with clear, functional menus and HUD elements.",
      "Designed and created visual assets, including the main character, environment elements (platforms, walls), interactive objects (teleporter, shop stand, laser shooter), and the credits statue.",
      "Developed the majority of the user interface visuals, ensuring visual consistency across menus and HUD components.",
    ],
  },
  {
    name: "BoxMania",
    type: "Mobile Game",
    thumbnailURL: "/images/BoxMania.jpg",
    thumbnailWidth: "27.5%",
    videoURL: "/videos/BoxMania.mp4",
    videoWidth: "27.5%",
    pageURL: "/projects/box-mania",
    desc: "A fast-paced, online multiplayer tapping game with a mathematical twist. Two players compete to reach the target score first, with their points increasing or decreasing based on their multiplier. Quick reflexes and strategy will determine the winner!",
    tags: [
      "Unity",
      "C#",
      "Photon Unity Networking",
      "Facebook",
      "GitHub",
      "Online Multiplayer",
      "Game Design",
    ],
    contributions: [
      "Developed a multiplayer system with matchmaking functionality using Photon Unity Networking (PUN), enabling seamless online gameplay.",
      "Integrated Facebook SDK to implement social features such as sharing and player invitations.",
      "Built a robust local save system to ensure player data persistence.",
      "Designed core gameplay systems and mechanics, shaping the overall player experience.",
    ],
  },
  {
    name: "Traceur",
    type: "PC Game",
    thumbnailURL: "/images/Traceur.jpg",
    videoURL: "/videos/Traceur.mp4",
    pageURL: "/projects/traceur",
    desc: "A fast-paced runner where players must rely on instinct to navigate perilous environments. Race toward your objective while evading deadly traps and outrunning relentless enemies. Every decision leaves a lasting impact, shaping the challenges you'll face further down the road.",
    tags: ["Unity", "C#", "GitHub", "User Interface", "QA Testing"],
    contributions: [
      "Sole UI programmer, responsible for developing the user interface for Traceur in close collaboration with the UI artist and game designer.",
      "Worked with the audio programmer to synchronize audio cues with in-game events, such as triggering countdown sounds alongside countdown animations.",
    ],
  },
];

export default projects;
