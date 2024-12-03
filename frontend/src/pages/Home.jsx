import React, { useState, useEffect } from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import { Stack, Divider } from "@mui/material";
import Carousel from "../components/Carousel";
import "./Home.css";

function Home() {
  const roles = ["Full-Stack Developer", "Game Developer"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack gap={5} className="min-h-inherit pt-[7rem] pb-[2.5rem]">
      {/* Title - Name and Roles */}
      <Stack
        flexDirection="row"
        gap={3}
        className="p-5 justify-center items-center"
      >
        <p className="text-3xl font-bold">Julian Tan</p>
        <Divider
          flexItem
          sx={{
            borderWidth: "2px",
            borderColor: "#1D1D1D",
            borderRadius: "15px",
            transform: "rotate(15deg)",
          }}
        />
        <p
          className={`text-3xl font-bold transition-transform duration-1000 translate-y-full w-[200px] whitespace-nowrap`}
          style={{
            animation: "slideDown 2s ease-in-out infinite",
          }}
        >
          {roles[currentIndex]}
        </p>
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
