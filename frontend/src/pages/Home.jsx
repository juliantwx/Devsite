import React from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import { Stack, Divider } from "@mui/material";
import TypeWriter from "typewriter-effect";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <Stack gap={5} className="min-h-inherit pt-[7rem] pb-[2.5rem]">
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
      <Stack>
        <h1>ABOUT ME</h1>
      </Stack>

      {/* Skills and Experiences */}
      <Stack>SKILL & EXPERIENCES</Stack>

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
