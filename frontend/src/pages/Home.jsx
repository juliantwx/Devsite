import React from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import skills from "../data/skills";
import { Stack, Divider } from "@mui/material";
import TypeWriter from "typewriter-effect";
import Carousel from "../components/Carousel";

function Home() {
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
          }}
        />
        <p className="ml-[-25px]">{"/>"}</p>
      </Stack>

      {/* About Me */}
      <Stack className="p-5 w-[85%]" gap={2}>
        <h1 className="text-3xl font-bold">ABOUT ME</h1>
        <p className="text-justify">
          Welcome to my online portfolio! My name is Julian Tan, and I am a team
          oriented game programmer who strives to write clean, efficient and
          readable code. I’m always eager to learn and experience new
          experiences in order to add onto my existing skill sets; resulting in
          unforgettable and intuitive gameplay. ​ I have a Bachelor's Degree in
          Game Programming and is currently undergoing my Master's Degree in
          Information Technology. I have multiple titles under my belt and love
          challenging myself to newer heights. During my free time, I love to
          keep myself busy by working on different aspects of game development
          that I am unfamiliar with in order to improve myself. It could be
          anything from developing mechanics / functions that I have in mind; to
          tinkering with shader graphs to enhance the visuals of my personal
          projects. ​ I also enjoy working in a team as I am able to constantly
          learn from my peers regardless of their profession.
        </p>
      </Stack>

      {/* Skills and Experiences */}
      <Stack className="p-5 w-[85%]" gap={2}>
        <h1 className="text-3xl font-bold">SKILL & EXPERIENCES</h1>
        <Carousel
          items={skills.map((skill, index) => (
            <img key={index} src={`/images/${skill}.png`} alt="Site's Icon" />
          ))}
        />
      </Stack>

      {/* Reviews */}
      <h1>Some of the reviews that I've gotten throughout the years</h1>
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
  );
}

export default Home;
