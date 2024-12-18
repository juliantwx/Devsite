// This file defines an array of image names representing my skills and experiences.

import { FaGooglePlay, FaGithub, FaTrello } from "react-icons/fa";
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
  SiAdobephotoshop,
  SiGoogledocs,
  SiJira,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiApple,
  SiFigma,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiSequelize,
  SiSupabase,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import CustomSVG from "../components/CustomSVG";
import { Link } from "@mui/material";

const skills = [
  {
    category: "Web Development - Front End",
    skills: [
      {
        name: "React",
        icon: SiReact,
        iconSize: 45,
        desc: () => (
          <div>
            React has been an integral part of my web development journey,
            enabling me to build highly dynamic and interactive user interfaces.
            Its component-based architecture allows me to create reusable UI
            components, ensuring scalability and maintainability in all my
            projects.
          </div>
        ),
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        iconSize: 45,
        desc: () => (
          <div>
            Next.js has elevated my ability to develop modern web applications
            by combining server-side rendering and static site generation. With
            its powerful features like routing, API integrations, and optimized
            performance, I've been able to build SEO-friendly and lightning-fast
            applications.
          </div>
        ),
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        iconSize: 45,
        desc: () => (
          <div>
            Tailwind CSS has transformed the way I approach styling, offering me
            a utility-first framework to create sleek and responsive designs
            efficiently. Its flexibility has allowed me to maintain design
            consistency while keeping my workflow streamlined and intuitive.
          </div>
        ),
      },
      {
        name: "Material UI",
        icon: SiMui,
        iconSize: 45,
        desc: () => (
          <div>
            Material UI has been my go-to library for implementing professional
            and accessible UI components. Its pre-designed components and
            theming capabilities have accelerated my development process, while
            ensuring that applications are visually appealing and user-friendly.
          </div>
        ),
      },
      {
        name: "Craft.js",
        icon: () => <CustomSVG text="Craft.js" width={85} />,
        iconSize: 45,
        desc: () => (
          <div>
            Craft.js has provided me with unparalleled flexibility in building
            custom drag-and-drop editors. I’ve used this library to create
            intuitive editing experiences, empowering users to design layouts
            without any coding knowledge, while allowing me to dive deep into
            customization and optimization.
          </div>
        ),
      },
    ],
  },
  {
    category: "Web Development - Back End",
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        iconSize: 45,
        desc: () => (
          <div>
            Node.js has been a core component in my back-end development,
            enabling me to build scalable and efficient web applications. During
            my academic projects, I used Node.js to create fast, non-blocking
            server-side applications, allowing for real-time data processing and
            seamless integration with other back-end technologies.
          </div>
        ),
      },
      {
        name: "Express.js",
        icon: SiExpress,
        iconSize: 45,
        desc: () => (
          <div>
            Express.js has been essential in streamlining the development of
            RESTful APIs in my projects. I used it in several academic web
            applications to create robust back-end services, allowing for easy
            routing, middleware management, and seamless integration with
            databases to deliver dynamic web experiences.
          </div>
        ),
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        iconSize: 45,
        desc: () => (
          <div>
            GraphQL has enhanced my ability to query APIs with more flexibility
            and efficiency. In academic projects, I implemented GraphQL to allow
            clients to request only the data they need, optimizing performance
            and improving the developer experience with fewer requests to the
            server.
          </div>
        ),
      },
      {
        name: "Sequelize",
        icon: SiSequelize,
        iconSize: 45,
        desc: () => (
          <div>
            Sequelize has been my ORM of choice for interacting with relational
            databases in my back-end projects. I used it extensively in academic
            applications to simplify complex database queries, manage
            migrations, and ensure a smooth connection between the application’s
            business logic and data storage.
          </div>
        ),
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        iconSize: 45,
        desc: () => (
          <div>
            Supabase has been a powerful tool in my academic projects for
            building real-time applications. I integrated Supabase's features,
            such as its instant database and authentication services, to deliver
            scalable back-end solutions that allowed seamless user interaction
            and efficient data management without the need for complex
            server-side code.
          </div>
        ),
      },
    ],
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
        options: "mb-[2px]",
      },
      {
        name: "Steamworks",
        icon: SiSteamworks,
        iconSize: 108,
        desc: () => (
          <div>
            I utilized Steamworks to implement a multiplayer mode for{" "}
            <Link
              href="/projects/go-gold-castle"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>Go Gold Castle</b>
              </i>
            </Link>
            , showcasing my ability to integrate third-party APIs and deliver
            engaging online experiences.
          </div>
        ),
        options: "mb-[8px]",
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
        options: "mb-[4px]",
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
            <Link
              href="/projects/box-mania"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>BoxMania</b>
              </i>
            </Link>
            .
          </div>
        ),
      },
    ],
  },
  {
    category: "Apple Development",
    skills: [
      {
        name: "SwiftUI",
        icon: SiSwift,
        iconSize: 45,
        desc: () => (
          <div>
            I completed an elective SwiftUI course during the final semester of
            my Master's degree to broaden my development skills and
            perspectives. As part of the course, I developed{" "}
            <Link
              href="/projects/backpackers-buddy"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>Backpackers Buddy</b>
              </i>
            </Link>
            , a mobile application designed to assist backpackers worldwide in
            finding accommodations and points of interest.
          </div>
        ),
      },
      {
        name: "Apple's Human Interface Guidelines",
        icon: SiApple,
        iconSize: 45,
        desc: () => (
          <div>
            During the design phase of{" "}
            <Link
              href="/projects/backpackers-buddy"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>Backpackers Buddy</b>
              </i>
            </Link>
            , my groupmate and I leveraged{" "}
            <Link
              href="https://developer.apple.com/design/human-interface-guidelines"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>Apple's Human Interface Guidelines</b>
              </i>
            </Link>{" "}
            to shape the app's design and user experience. By adhering to these
            principles, we ensured the app was not only visually appealing but
            also highly accessible, delivering an intuitive and user-friendly
            experience.
          </div>
        ),
        options: "mb-[8px]",
      },
      {
        name: "DocC",
        icon: () => <CustomSVG text="DocC" width={60} />,
        iconSize: 45,
        desc: () => (
          <div>
            To ensure the maintainability and clarity of{" "}
            <Link
              href="/projects/backpackers-buddy"
              target="_blank"
              rel="noopener noreferrer"
              underline="hover"
            >
              <i>
                <b>Backpackers Buddy</b>
              </i>
            </Link>{" "}
            codebase, I utilized DocC, Apple's native documentation tool for
            Swift. By integrating DocC, I was able to generate comprehensive and
            structured documentation directly from the source code, making it
            easier to communicate functionality and design decisions. This
            approach streamlined collaboration with my groupmate and ensured the
            project adhered to best practices in code documentation.
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
        iconSize: 45,
        desc: () => (
          <div>
            GitHub has been my go-to platform for version control and
            collaboration, enabling me to manage projects efficiently, and share
            code with team members, streamlining the development process.
          </div>
        ),
      },
      {
        name: "Jira",
        icon: SiJira,
        iconSize: 45,
        desc: () => (
          <div>
            Jira has been instrumental in organizing tasks, tracking progress,
            and ensuring smooth project management. Its integration with
            development workflows has greatly improved my team's productivity
            and coordination.
          </div>
        ),
      },
      {
        name: "Trello",
        icon: FaTrello,
        iconSize: 45,
        desc: () => (
          <div>
            Trello is an intuitive tool that helps in visualizing tasks and
            managing workflows with simple, easy-to-use boards. It's been
            crucial for organizing my tasks and collaborating with teams on
            various projects.
          </div>
        ),
      },
      {
        name: "Figma",
        icon: SiFigma,
        iconSize: 45,
        desc: () => (
          <div>
            Figma has been an invaluable tool throughout my journey, whether
            during my internship with DineSeal or in academic projects. Its
            ability to quickly create wireframes gave an early feel for the
            application, streamlining feedback and iteration. This made
            collaborating with cross-functional teams seamless, helping us craft
            designs that perfectly balanced functionality and aesthetics.
          </div>
        ),
      },
      {
        name: "Photoshop",
        icon: SiAdobephotoshop,
        iconSize: 45,
        desc: () => (
          <div>
            Photoshop is my go-to tool for graphic design and image
            manipulation. It has allowed me to create visual assets for
            projects, from UI design to game assets, enhancing the overall user
            experience.
          </div>
        ),
      },
      {
        name: "Google Docs",
        icon: SiGoogledocs,
        iconSize: 45,
        desc: () => (
          <div>
            Google Docs has been invaluable for collaborative writing,
            documentation, and real-time editing with team members - allowing
            for seamless collaboration from anywhere.
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
        iconSize: 45,
      },
      {
        name: "C++",
        icon: SiCplusplus,
        iconSize: 45,
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        iconSize: 45,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        iconSize: 45,
      },
      {
        name: "Swift",
        icon: SiSwift,
        iconSize: 45,
      },
      {
        name: "Python",
        icon: SiPython,
        iconSize: 45,
      },
      {
        name: "SQL",
        icon: BsFiletypeSql,
        iconSize: 45,
      },
      {
        name: "HTML",
        icon: SiHtml5,
        iconSize: 45,
      },
      {
        name: "CSS",
        icon: SiCss3,
        iconSize: 45,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "MySQL",
        icon: SiMysql,
        iconSize: 45,
        desc: () => (
          <div>
            MySQL has been a cornerstone in my backend development experience,
            allowing me to design and manage relational databases efficiently.
            Its robust querying capabilities and reliability have made it a
            go-to choice for projects requiring structured and scalable data
            storage.
          </div>
        ),
      },
      {
        name: "SQLite",
        icon: SiSqlite,
        iconSize: 45,
        desc: () => (
          <div>
            SQLite's lightweight nature and self-contained architecture have
            made it ideal for quick prototyping and mobile application
            development. I’ve relied on it for projects where simplicity and
            portability were key, appreciating its seamless integration and ease
            of use.
          </div>
        ),
      },
    ],
  },
];

export default skills;
