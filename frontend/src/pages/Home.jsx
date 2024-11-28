import React from "react";
import Review from "../components/Review";
import reviews from "../data/reviews";
import { Stack } from "@mui/material";

function Home() {
  return (
    <Stack
      gap={3}
      alignItems="center"
      className="min-h-inherit pt-[7rem] pb-[2.5rem] flex justify-center items-start"
    >
      {reviews.map((review, index) => (
        <Review
          key={index}
          name={review.name}
          rating={review.rating}
          message={review.message}
        />
      ))}
    </Stack>
  );
}

export default Home;
