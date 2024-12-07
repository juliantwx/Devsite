import React, { useState } from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import skills from "../data/skills";
import {
  Stack,
  Divider,
  Link,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaGooglePlay } from "react-icons/fa";
import { SiSteamworks, SiStencyl } from "react-icons/si";
import { BiLogoUnity } from "react-icons/bi";
import TypeWriter from "typewriter-effect";
import Carousel from "../components/Carousel";

function Home() {
  const [currentAccordion, setCurrentAccordion] = useState("fullstack");
  const [currentSkill, setCurrentSkill] = useState(null);

  const skillsData = [{name: "Unity Engine", desc:"Unity Engine has been my primary tool for game development, allowing me to create immersive gameplay experiences and optimize productivity with custom tools."}, 
    {name: "Stencyl", desc:"Stencyl introduced me to the world of game development, providing a strong foundation in 2D game design and logic-building concepts."},
    {name: "Steamworks", desc:"I utilized Steamworks to implement a multiplayer mode for an internship project, showcasing my ability to integrate third-party APIs and deliver engaging online experiences."},
    {name: "Google Play", desc:"I leveraged Google Play services to integrate features like cloud saving, leaderboards, and achievements, enriching user experiences with seamless data synchronization."}]

  function changeAccordion(accordion) {
    setCurrentAccordion(currentAccordion !== accordion ? accordion : "");
    setCurrentSkill(null);
  }

  return (
    <Stack gap={5} className="min-h-inherit pt-[7rem] pb-[2.5rem] items-center">
      {/* Title - Name and Roles */}
      <Stack
        flexDirection="row"
        gap={3}
        className="p-5 justify-center items-center text-[24px] sm:text-[46px]"
      >
        <p className="mr-[-25px]">{"<"}</p>
        <p className="font-bold">Julian Tan</p>
        <Divider
          flexItem
          sx={{
            borderWidth: "2px",
            borderColor: "#1D1D1D",
            borderRadius: "15px",
          }}
        />
        <TypeWriter
          options={{
            strings: ["Full-Stack Developer", "Game Developer"],
            delay: 35,
            deleteSpeed: 35,
            autoStart: true,
            loop: true,
            pauseFor: 3500,
          }}
        />
        <p className="ml-[-25px]">{"/>"}</p>
      </Stack>

      {/* About Me */}
      <Stack className="p-5 w-[85%]" gap={2}>
        <h1 className="text-3xl font-bold">ABOUT ME</h1>
        <p className="text-justify">
          Hello and welcome to my online portfolio! I'm <b>Julian Tan</b>, a
          passionate <b>Full-Stack Developer</b> and <b>Game Developer</b> with
          a strong background in building innovative applications and immersive
          experiences. I bring a unique combination of technical expertise and
          creative problem-solving skills, honed through years of academic and
          professional experience.
          <br />
          <br />I hold a <b>Master of Information Technology</b> from{" "}
          <b>RMIT University</b>, where I achieved a GPA of <b>3.6</b> and
          deepened my expertise in emerging technologies. This drive for
          continuous learning led me to pursue my master's degree, broadening my
          skill set beyond game development and helping me become a more
          versatile developer. My{" "}
          <b>Bachelor's degree in Game Development (HONS)</b> from the{" "}
          <b>University of Wollongong Malaysia</b> provided the foundation for
          my journey in creating engaging and interactive digital content.
          <br />
          <br />
          Professionally, I have experience in diverse roles, from developing
          web applications at <b>DineSeal</b>, where I built a user-friendly
          drag-and-drop editor, to crafting captivating gameplay and LiveOps for
          titles like{" "}
          <Link
            href="https://clawstarsgame.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <b>ClawStars</b>
          </Link>{" "}
          at{" "}
          <Link
            href="https://www.appxplore.com/"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <b>Appxplore</b>
          </Link>
          . My freelance work on{" "}
          <Link
            href="https://www.fiverr.com/storyfied"
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
          >
            <b>Fiverr</b>
          </Link>{" "}
          allowed me to collaborate on diverse projects, ranging from
          hyper-casual arcade games to educational tools for children with
          learning difficulties. Whether it's designing reusable React
          components, optimizing Unity workflows, or integrating third-party
          analytical tools to boost performance, I thrive in collaborative,
          fast-paced environments where innovation and precision are key.
          <br />
          <br />
          Outside of work, I enjoy learning new technologies, refining my craft,
          and staying at the forefront of industry trends. I'm driven by the
          goal of creating software and games that not only function seamlessly
          but also deliver meaningful and enjoyable experiences to users.
        </p>
      </Stack>

      {/* Skills and Experiences */}
      <Stack className="p-5 w-[85%]">
        <h1 className="text-3xl font-bold mb-5">SKILL & EXPERIENCES</h1>
        <Accordion
          expanded={currentAccordion === "fullstack"}
          onChange={() => changeAccordion("fullstack")}
        >
          <AccordionSummary
            expandIcon={<IoMdArrowDropdown />}
            className="font-bold"
          >
            Full-Stack Development
            <Divider sx={{ borderWidth: "1px" }} />
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={currentAccordion === "gamedev"}
          onChange={() => changeAccordion("gamedev")}
        >
          <AccordionSummary
            expandIcon={<IoMdArrowDropdown />}
            className="font-bold"
          >
            Game Development
          </AccordionSummary>
          <AccordionDetails>
            <Stack
              flexDirection="row"
              gap={3}
              className="items-center mt-[-12px] mb-3 h-[50px]"
            >
              <Tooltip title={skillsData[0].name}  placement="top" arrow>
                <span>
                  <BiLogoUnity
                    size={48}
                    className={`mb-[-4px] ${currentSkill.name === skillsData[0].name ? "text-taupe" : ""} hover:text-taupe transition-colors`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setCurrentSkill(skillsData[0])
                    }
                  />
                </span>
              </Tooltip>
              <Tooltip title={skillsData[1].name} placement="top" arrow>
                <span>
                  <SiStencyl
                    size={48}
                    className={`${currentSkill.name === skillsData[1].name ? "text-taupe" : ""} hover:text-taupe transition-colors`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setCurrentSkill(skillsData[1])
                    }
                  />
                </span>
              </Tooltip>
              <Tooltip
                title={skillsData[2].name} 
                placement="top"
                arrow
                PopperProps={{
                  modifiers: [
                    {
                      name: "offset",
                      options: {
                        offset: [0, -40],
                      },
                    },
                  ],
                }}
              >
                <span>
                  <SiSteamworks
                    size={108}
                    className={`mb-2 ${currentSkill.name === skillsData[2].name ? "text-taupe" : ""} hover:text-taupe transition-colors`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setCurrentSkill(skillsData[2])
                    }
                  />
                </span>
              </Tooltip>
              <Tooltip title={skillsData[3].name} placement="top" arrow>
                <span>
                  <FaGooglePlay
                    size={40}
                    className={`${currentSkill.name === skillsData[3].name ? "text-taupe" : ""} hover:text-taupe transition-colors`}
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      setCurrentSkill(skillsData[3])
                    }
                  />
                </span>
              </Tooltip>
            </Stack>
            {currentSkill && <p>{currentSkill.desc}</p>}
          </AccordionDetails>
        </Accordion>
      </Stack>

      {/* Reviews */}
      <Stack className="p-5 w-[85%]" gap={2}>
        <h1 className="text-3xl font-bold">TESTIMONIALS</h1>
        <Carousel
          items={reviews.map((review, index) => (
            <Review
              key={index}
              name={review.name}
              rating={review.rating}
              message={review.message}
            />
          ))}
        />
      </Stack>
    </Stack>
  );
}

export default Home;
