import React from "react";
import { Stack, Rating, Paper } from "@mui/material";

function Review({ name, rating, message }) {
  return (
    <Paper elevation={3} sx={{ borderRadius: "16px", padding: 4 }}>
      <Stack className="w-[400px] sm:w-[700px]" gap={1} alignItems="center">
        {/* Reviewer's name and rating */}
        <Stack direction="row" gap={3} alignItems="center">
          <h1 className="text-6xl">{name}</h1>
          <Rating value={rating} size="large" readOnly></Rating>
        </Stack>

        {/* Reviewer's comments */}
        <p className="text-xl text-center">
          <span className="absolute text-3xl -translate-x-3 -translate-y-1">
            &ldquo;
          </span>
          {message}
          <span className="absolute text-3xl translate-x-1 translate-y-0">
            &rdquo;
          </span>
        </p>
      </Stack>
    </Paper>
  );
}

export default Review;
