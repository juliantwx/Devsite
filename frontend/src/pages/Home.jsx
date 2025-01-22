import React, { useState } from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import skills from "../data/skills";
import {
  Stack,
  Grid2 as Grid,
  Divider,
  Link,
  Tooltip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { IoMdArrowDropdown } from "react-icons/io";
import TypeWriter from "typewriter-effect";
import Carousel from "../components/Carousel";
import { playAudioOneShot } from "../utils/AudioUtils";

function Home() {
  const [currentAccordion, setCurrentAccordion] = useState(
    "Web Development - Front End"
  );
  const [currentSkill, setCurrentSkill] = useState(
    getDefaultSkill(currentAccordion)
  );

  // Returns the first element of a given skill category
  function getDefaultSkill(category) {
    return (
      skills.find((skillCategory) => skillCategory.category === category)
        ?.skills?.[0] || null
    );
  }

  // Update the current accordion and skill
  function changeAccordion(category) {
    setCurrentAccordion(currentAccordion !== category ? category : "");
    setCurrentSkill(getDefaultSkill(category));
  }

  return (
    <Stack gap={5} className="min-h-inherit pt-[7rem] pb-[2.5rem] items-center">
      {/* Title - Name and Roles */}
      <Stack
        flexDirection="row"
        sx={{
          p: 5,
          justifyContent: "center",
          alignItems: "center",
          gap: {
            xs: 1,
            sm: 2.5,
          },
          fontSize: {
            xs: "24px",
            sm: "32px",
            md: "48px",
          },
          whiteSpace: "nowrap",
        }}
      >
        <p className="mr-[-10px] sm:mr-[-15px]">{"<"}</p>
        <p className="font-bold">Julian Tan</p>
        <Divider
          flexItem
          sx={{
            borderWidth: {
              xs: "1px",
              sm: "1.5px",
              md: "2px",
            },
            borderColor: "#1D1D1D",
            borderRadius: "15px",
          }}
        />
        <TypeWriter
          options={{
            strings: [
              "Full-Stack Developer",
              "Game Developer",
              "iOS Developer",
            ],
            delay: 35,
            deleteSpeed: 35,
            autoStart: true,
            loop: true,
            pauseFor: 3500,
          }}
        />
        <p className="ml-[-10px] sm:ml-[-15px]">{"/>"}</p>
      </Stack>

      {/* About Me */}
      <Stack className="p-5 w-[85%]" gap={2}>
        <h1 className="text-3xl font-bold">ABOUT ME</h1>
        <p className="text-justify">
          Hello and welcome to my online portfolio! I'm <b>Julian Tan</b>, a
          passionate <b>Full-Stack Developer</b>, <b>Game Developer</b>, and{" "}
          <b>iOS Developer</b> with a strong background in building innovative
          applications and immersive experiences. I bring a unique combination
          of technical expertise and creative problem-solving skills, honed
          through years of academic and professional experience.
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
        {/* Create an accordion for each skill category */}
        {skills.map((skillCategory) => (
          <Accordion
            key={skillCategory.category}
            expanded={currentAccordion === skillCategory.category}
            onChange={() => changeAccordion(skillCategory.category)}
          >
            <AccordionSummary
              expandIcon={<IoMdArrowDropdown />}
              className="font-bold"
            >
              {skillCategory.category}
            </AccordionSummary>
            <AccordionDetails>
              <Stack gap={3}>
                <Grid
                  container
                  spacing={3}
                  className={`${
                    currentSkill && currentSkill.desc ? "" : "pb-4"
                  }`}
                >
                  {/* Display skills icon in a grid format */}
                  {skillCategory.skills.map((skill) => (
                    <Tooltip
                      key={skill.name}
                      title={skill.name}
                      placement="top"
                      arrow
                    >
                      <span
                        className={`h-[50px] flex items-center ${
                          currentSkill?.name === skill.name ? "" : "text-gray"
                        } hover:text-black transition-colors`}
                        onClick={() => setCurrentSkill(skill)}
                        // onMouseEnter={() =>
                        //   playAudioOneShot("/audios/hover.mp3", 0.5)
                        // }
                        style={{ cursor: "pointer" }}
                      >
                        <skill.icon
                          className={`${skill?.options ?? ""}`}
                          size={skill.iconSize}
                        />
                      </span>
                    </Tooltip>
                  ))}
                </Grid>
                {currentSkill && currentSkill.desc && currentSkill.desc()}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
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
