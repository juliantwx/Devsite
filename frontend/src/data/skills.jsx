// This file defines an array of image names representing my skills and experiences.

import { FaGooglePlay, FaGithub } from "react-icons/fa";
import { SiSteamworks, SiStencyl } from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import CustomSVG from "../components/CustomSVG";

const skills = [
  {
    category: "Web Development",
    skills: [],
  },
  {
    category: "Game Development",
    skills: [
      {
        name: "Unity Engine",
        icon: BiLogoUnity,
        iconSize: 48,
        desc: "Unity Engine has been my primary tool for game development, allowing me to create immersive gameplay experiences and optimize productivity with custom tools.",
        options: "mb-[-4px]",
      },
      {
        name: "Stencyl",
        icon: SiStencyl,
        iconSize: 48,
        desc: "Stencyl introduced me to the world of game development, providing a strong foundation in 2D game design and logic-building concepts.",
      },
      {
        name: "Steamworks",
        icon: SiSteamworks,
        iconSize: 108,
        desc: "I utilized Steamworks to implement a multiplayer mode for an internship project, showcasing my ability to integrate third-party APIs and deliver engaging online experiences.",
        options: "mb-2",
      },
      {
        name: "Google Play",
        icon: FaGooglePlay,
        iconSize: 40,
        desc: "I leveraged Google Play services to integrate features like cloud saving, leaderboards, and achievements, enriching user experiences with seamless data synchronization.",
      },
      {
        name: "Unity PUN (Photon)",
        icon: () => <CustomSVG text="PUN"/>,
      iconSize: 40,
      desc: "I utilized Photon to introduce multiplayer features into a multitude of projects. Most prominently a live event project and one of my personal mathematical tapping game (Box Mania)",
      }
    ],
  },
  {
    category: "Development Tools",
    skills: [
      {
        name: "GitHub",
        icon: FaGithub,
        iconSize: 48,
        toolTipOffset: [0, 0],
        desc: "GitHub has been my go-to platform for version control and collaboration, enabling me to manage projects efficiently, and share code with team members, streamlining the development process.",
      },
    ],
  },
];

export default skills;
