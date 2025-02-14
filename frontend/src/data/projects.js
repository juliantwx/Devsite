// This file contains the details of projects that I've worked on over my development journey.

// TODO: Add all projects' details
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
      "Work closely with game designers, game artists, backend developers, and fellow Unity programmers in a collaborative effort to develop new content and improve the overall experience for our players.",

"Implement new LiveOps, ranging from in-game events to content updates and localization.",

"Implemented User Interfaces based on the designs that were provided by the art and design team.",

"Integrate 3rd party analytical solutions such as DevToDev to help our designers pinpoint lackluster events, sales, and mechanics.",

"Create Unity tools and wrote extension methods for frequently used variables to increase our development team's productivity.",

"Quickly produce prototypes for requested mechanics.",

"QA testing and bug fixing.",
    ]
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
      "Integrating Google Play plugin to introduce cloud saving system, in-app purchases, leaderboards, and achievements into the project.",

"Save system that utilizes cloud and local save. Local save serves as a fallback if cloud saving is unavailable. Locally stored data will be uploaded to the cloud whenever possible.",

"Procedural generation for obstacle courses.",

"Designed and implemented the User Interface",

"Scaling for different mobile screen sizes.",

"Change entire game's visuals based on equipped color palette.",

"Time and ads based reward systems.",

"Notification system.",

"Laser shader.",

"Game art.",

"Game design."
    ]
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
      "My main responsibility was to convert Go Gold Castle into an online game using Steamworks' multiplayer feature.",

"Refactor code base for core mechanics.",

"Add new characters into the game's roster, including their skills, animations, and UI.",

"Writing documentation for future references, system optimization, and bug fixing.",
    ]
  },
  {
    name: "Trapped",
    type: "PC Game",
    thumbnailURL: "/images/Trapped.png",
    videoURL: "/videos/Trapped.mp4",
    pageURL: "/projects/trapped",
    desc: "You've been Trapped in a strange facility with no idea how to escape. Strange creatures lurk in the shadows, and danger is everywhere. Armed with an experimental gun and unlimited ammo, you'll have to fight your way through environmental hazards and relentless enemies. Think fast, shoot faster, and break free in this intense 2D platform shooter.",
    tags: ["Unity", "C#", "GitHub", "Enemy AI Development", "QA Testing"],
    contributions: ["Designed and programmed every enemy, including their behaviors and interactions, within the game."]
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
  },
  {
    name: "Traceur",
    type: "PC Game",
    thumbnailURL: "/images/Traceur.jpg",
    videoURL: "/videos/Traceur.mp4",
    pageURL: "/projects/traceur",
    desc: "A fast-paced runner where players must rely on instinct to navigate perilous environments. Race toward your objective while evading deadly traps and outrunning relentless enemies. Every decision leaves a lasting impact, shaping the challenges you'll face further down the road.",
    tags: ["Unity", "C#", "GitHub", "User Interface", "QA Testing"],
  },
];

export default projects;
