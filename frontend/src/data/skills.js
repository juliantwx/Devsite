// This file defines an array of image names representing my skills and experiences.

import { FaGooglePlay, FaGithub } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiSteamworks,
  SiStencyl,
  SiJavascript,
  SiTypescript,
  SiSwift,
  SiPython,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiCsharp,
} from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
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
        desc: () => (
          <div>
            Unity Engine has been my primary tool for game development, allowing
            me to create immersive gameplay experiences and optimize
            productivity with custom tools.
          </div>
        ),
        options: "mb-[-4px]",
      },
      {
        name: "Stencyl",
        icon: SiStencyl,
        iconSize: 48,
        desc: () => (
          <div>
            Stencyl introduced me to the world of game development, providing a
            strong foundation in 2D game design and logic-building concepts.
          </div>
        ),
      },
      {
        name: "Steamworks",
        icon: SiSteamworks,
        iconSize: 108,
        desc: () => (
          <div>
            I utilized Steamworks to implement a multiplayer mode for an
            internship project, showcasing my ability to integrate third-party
            APIs and deliver engaging online experiences.
          </div>
        ),
        options: "mb-2",
      },
      {
        name: "Google Play",
        icon: FaGooglePlay,
        iconSize: 40,
        desc: () => (
          <div>
            I leveraged Google Play services to integrate features like cloud
            saving, leaderboards, and achievements, enriching user experiences
            with seamless data synchronization.
          </div>
        ),
      },
      {
        name: "Unity PUN (Photon)",
        icon: () => <CustomSVG text="PUN" />,
        iconSize: 40,
        desc: () => (
          <div>
            I leveraged Photon to implement multiplayer functionality across
            multiple projects, including a live event application and my
            personal math-based tapping game,{" "}
            <i>
              <b>BoxMania</b>
            </i>
            .
          </div>
        ),
      },
    ],
  },
  {
    category: "Development Tools",
    skills: [
      {
        name: "GitHub",
        icon: FaGithub,
        iconSize: 48,
        desc: () => (
          <div>
            GitHub has been my go-to platform for version control and
            collaboration, enabling me to manage projects efficiently, and share
            code with team members, streamlining the development process.
          </div>
        ),
      },
    ],
  },
  {
    category: "Development Languages",
    skills: [
      {
        name: "C#",
        icon: SiCsharp,
        iconSize: 48,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        iconSize: 48,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        iconSize: 48,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        iconSize: 48,
      },
      {
        name: "Swift",
        icon: SiSwift,
        iconSize: 48,
      },
      {
        name: "Python",
        icon: SiPython,
        iconSize: 48,
      },
      {
        name: "SQL",
        icon: BsFiletypeSql,
        iconSize: 48,
      },
      {
        name: "HTML",
        icon: SiHtml5,
        iconSize: 48,
      },
      {
        name: "CSS",
        icon: SiCss3,
        iconSize: 48,
      },
    ],
  },
];

export default skills;
